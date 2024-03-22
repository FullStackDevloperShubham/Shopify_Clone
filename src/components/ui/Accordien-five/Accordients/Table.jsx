import React from 'react'

function Table() {
    return (
        <div class=" p-4 rounded-lg mb-4">
            <h2 class="text-lg font-semibold mb-2">Details to Enter:</h2>
            <table class="w-full border border-gray-300">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="py-2 px-4 border-b font-semibold">Field name</th>
                        <th class="py-2 px-4 border-b font-semibold">Details to enter</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b">
                        <td class="py-2 px-4 border-r">Name on card</td>
                        <td class="py-2 px-4">Enter Bogus Gateway</td>
                    </tr>
                    <tr class="border-b">
                        <td class="py-2 px-4 border-r">Credit card number</td>
                        <td class="py-2 px-4">
                            Enter each of these in turn to simulate different types of transaction:
                            <ul class="list-decimal pl-6">
                                <li>Enter 1 to simulate a successful transaction</li>
                                <li>Enter 2 to simulate a failed transaction</li>
                                <li>Enter 3 to simulate an exception (this generates a message indicating that an error has occurred with the provider)</li>
                            </ul>
                        </td>
                    </tr>
                    <tr class="border-b">
                        <td class="py-2 px-4 border-r">CVV</td>
                        <td class="py-2 px-4">Enter any 3-digit number (for example, 111)</td>
                    </tr>
                    <tr>
                        <td class="py-2 px-4 border-r">Expiry Date</td>
                        <td class="py-2 px-4">Enter any date in the future</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Table