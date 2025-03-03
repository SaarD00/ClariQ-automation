'use client'
import { EditorCanvasTypes, EditorNodeType } from '@/lib/types'
import { useNodeConnections } from '@/providers/connections-provider'
import { useEditor } from '@/providers/editor-provider'
import { Tabs, TabsContent, } from '@/components/ui/tabs'

import React, { useEffect } from 'react'
import { EditorCanvasDefaultCardTypes } from '@/lib/constant'
import {
    Card,
    CardHeader,
} from '@/components/ui/card'
import {
    fetchBotSlackChannels,
    onConnections,
    onDragStart,
} from '@/lib/editor-utils'
import EditorCanvasIconHelper from './editor-canvas-card-icon-hepler'

import { useFuzzieStore } from '@/store'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

type Props = {
    nodes: EditorNodeType[]
}

const EditorCanvasNavbar = ({ nodes }: Props) => {
    const { state } = useEditor()
    const { nodeConnection } = useNodeConnections()
    const { googleFile, setSlackChannels } = useFuzzieStore()
    useEffect(() => {
        if (state) {
            onConnections(nodeConnection, state, googleFile)
        }
    }, [state])

    useEffect(() => {
        if (nodeConnection.slackNode.slackAccessToken) {
            fetchBotSlackChannels(
                nodeConnection.slackNode.slackAccessToken,
                setSlackChannels
            )
        }
    }, [nodeConnection])

    return (
        <aside className=''>
            <Tabs
                defaultValue="actions"
                className=" bg-neutral-600/50 backdrop-blur-[2px] rounded-xl border border-white/20 overflow-scroll   pb-2"
            >
                <TabsContent
                    value="actions"
                    className="flex  gap-2 px-5   "
                >
                    {Object.entries(EditorCanvasDefaultCardTypes)
                        .filter(
                            ([_, cardType]) =>
                                (!nodes.length && cardType.type === 'Trigger') ||
                                (nodes.length && cardType.type === 'Action')
                        )
                        .map(([cardKey, cardValue]) => (
                            <Card
                                key={cardKey}
                                draggable
                                className="w-full cursor-grab border-black bg-neutral-100 dark:border-neutral-700 dark:bg-black"
                                onDragStart={(event) =>
                                    onDragStart(event, cardKey as EditorCanvasTypes)
                                }
                            >
                                <TooltipProvider>
                                    <Tooltip delayDuration={0}>
                                        <TooltipTrigger>


                                            <CardHeader className="flex flex-row items-center gap-4 p-3 justify-center">
                                                <EditorCanvasIconHelper type={cardKey as EditorCanvasTypes} />
                                                {/* <CardTitle className="text-md">
                                        {cardKey}
                                        </CardTitle> */}
                                            </CardHeader>
                                        </TooltipTrigger>
                                        <TooltipContent className='z-30 left-0 absolute'>
                                            <p>{cardKey}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Card>
                        ))}
                </TabsContent>
            </Tabs>
        </aside>
    )
}

export default EditorCanvasNavbar
