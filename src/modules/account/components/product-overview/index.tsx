import { Table } from "@medusajs/ui"
import {DropdownMenuDemo} from "@modules/account/components/dropdown-menu-demo";
// Then use DynamicDropdownMenuDemo in your TableDemo component
// import DropdownMenuDemo from "@modules/account/components/dropdown-menu-radix"

type Order = {
    id: string
    displayId: number
    Name: string
    Photo: string
    amount: number
    currency: string
}

const fakeData: Order[] = [
    {
        id: "order_6782",
        displayId: 86078,
        Name: "Iphone",
        Photo: "32690",
        amount: 493,
        currency: "EUR",
    },

    {
        id: "order_6782",
        displayId: 86078,
        Name: "Iphone",
        Photo: "32690",
        amount: 493,
        currency: "EUR",
    },
    {
        id: "order_6782",
        displayId: 86078,
        Name: "Iphone",
        Photo: "32690",
        amount: 493,
        currency: "EUR",
    },
    {
        id: "order_6782",
        displayId: 86078,
        Name: "Iphone",
        Photo: "32690",
        amount: 493,
        currency: "EUR",
    },

    {
        id: "order_6782",
        displayId: 86078,
        Name: "Iphone",
        Photo: "32690",
        amount: 493,
        currency: "EUR",
    },
    {
        id: "order_46487",
        displayId: 42845,
        Name: "Ipad",
        Photo: "86379",
        amount: 113,
        currency: "JPY",
    },
    {
        id: "order_8169",
        displayId: 39129,
        Name: "Iwatch",
        Photo: "89383",
        amount: 43,
        currency: "USD",
    },
    {
        id: "order_67883",
        displayId: 5548,
        Name: "Air pods",
        Photo: "52860",
        amount: 840,
        currency: "GBP",
    },
    {
        id: "order_61121",
        displayId: 87668,
        Name: "Imac",
        Photo: "45675",
        amount: 304,
        currency: "GBP",
    },
]

export function TableDemo() {
    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>#</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Photo</Table.HeaderCell>
                    <Table.HeaderCell className="text-right">Amount</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {fakeData.map((order) => {
                    return (
                        <Table.Row
                            key={order.id}
                            className="[&_td:last-child]:w-[1%] [&_td:last-child]:whitespace-nowrap"
                        >
                            <Table.Cell>{order.displayId}</Table.Cell>
                            <Table.Cell>{order.Name}</Table.Cell>
                            <Table.Cell>
                                <img src="/demo.JPG" alt="John Doe" width="50" height="50" />
                            </Table.Cell>
                            <Table.Cell className="text-right">
                                {new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: order.currency,
                                }).format(order.amount)}
                            </Table.Cell>
                            <Table.Cell className="text-ui-fg-muted">
                                {order.currency}
                            </Table.Cell>
                            <Table.Cell>
                                <DropdownMenuDemo /> {/* Added this cell */}
                            </Table.Cell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>
    )
}
