'use client'

import { EllipsisHorizontal, PencilSquare, Plus, Trash } from "@medusajs/icons"
import { Button, DropdownMenu } from "@medusajs/ui"

export function DropdownMenuDemo() {
    return (
        <DropdownMenu>
            <DropdownMenu.Trigger asChild>
                <Button variant="secondary" format={"icon"}>
                    <EllipsisHorizontal />
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Item className="gap-x-2">
                    <PencilSquare className="text-ui-fg-subtle" />
                    Edit
                </DropdownMenu.Item>
                <DropdownMenu.Item className="gap-x-2">
                    <Plus className="text-ui-fg-subtle" />
                    Add
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item className="gap-x-2">
                    <Trash className="text-ui-fg-subtle" />
                    Delete
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu>
    )
}
