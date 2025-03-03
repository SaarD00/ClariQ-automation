'use client'
import { Button } from '@/components/ui/button'
import { useNodeConnections } from '@/providers/connections-provider'
import { usePathname } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import {
  onCreateNodesEdges,
  onFlowPublish,
} from '../_actions/workflow-connections'
import { toast } from 'sonner'

type Props = {
  children: React.ReactNode
  edges: any[]
  nodes: any[]
}

const FlowInstance = ({ children, edges, nodes }: Props) => {
  const pathname = usePathname()
  const [isFlow, setIsFlow] = useState([])
  const { nodeConnection } = useNodeConnections()

  const onFlowAutomation = useCallback(async () => {
    const flow = await onCreateNodesEdges(
      pathname.split('/').pop()!,
      JSON.stringify(nodes),
      JSON.stringify(edges),
      JSON.stringify(isFlow)
    )// eslint-disable-line react-hooks/exhaustive-deps

    if (flow) toast.message(flow.message)
  }, [nodeConnection]) // eslint-disable-line react-hooks/exhaustive-deps

  const onPublishWorkflow = useCallback(async () => { // eslint-disable-line react-hooks/exhaustive-deps
    const response = await onFlowPublish(pathname.split('/').pop()!, true)
    if (response) toast.message(response) // eslint-disable-line react-hooks/exhaustive-deps 
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const onAutomateFlow = async () => {
    const flows: any = []
    const connectedEdges = edges.map((edge) => edge.target)
    connectedEdges.map((target) => {
      nodes.map((node) => {
        if (node.id === target) {
          flows.push(node.type)
        }
      })
    })

    setIsFlow(flows) // eslint-disable-line react-hooks/exhaustive-deps
  } // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    onAutomateFlow() // eslint-disable-line react-hooks/exhaustive-deps
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [edges]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className=" flex-col hidden md:flex gap-2">
      <div className="flex gap-3 p-4">
        <Button
          className='bg-neutral-100'
          onClick={onFlowAutomation}
          disabled={isFlow.length < 1}
        >
          Save
        </Button>
        <Button
          disabled={isFlow.length < 1}
          onClick={onPublishWorkflow}
        >
          Publish
        </Button>
      </div>
      {children}
    </div>
  )
}

export default FlowInstance
