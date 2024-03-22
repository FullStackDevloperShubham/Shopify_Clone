import React, { Fragment } from 'react'
import Side from '@/components/ui/Side'
import First from '@/components/ui/Accordien-five/Accordients/First'
import Second from '@/components/ui/Accordien-five/Accordients/Second'
import Third from '@/components/ui/Accordien-five/Accordients/Third'
import Table from '@/components/ui/Accordien-five/Accordients/Table'

function page() {
    return (
        <Fragment>
            {/* side bar */}
            <Side />
            {/* above is side bar */}

            <div className='overflow-auto'>

                <div className="overflow-scroll absolute mt-19 top-0 ml-64 bg-white border border-gray-200 shadow-md p-6" style={{ height: '100%' }}>
                    <h2 className=" text-lg font-semibold underline mb-4">Placing a test order</h2>
                    <p className="text-gray-700">
                        By placing a test order, you can make sure that your checkout process and settings for order processing, inventory, shipping, email notifications, and taxes are all correct.
                    </p>
                    <p className="text-gray-700 mt-2">
                        You aren't charged for a test order. You should place at least one test order during your store setup, or whenever you make changes to your payment settings.
                    </p>
                    <p className="text-gray-700 mt-2">
                        You can place a test order by simulating a transaction through Shopify's Bogus Gateway, or if you're using Shopify Payments, then you can test your configuration by using Shopify Payments test mode.
                    </p>
                    <p className="text-gray-700 mt-2">
                        You can also use a real payment provider, and then immediately cancel and refund the order. You might be subject to fees from the payment processor that you use.
                    </p>
                    <p className="text-gray-700 mt-2">
                        You can test a payment gateway only if you've chosen a paid plan.
                    </p>
                    <div className="bg-gray-200 p-4 border border-grey-200 rounded-2xl mt-5">
                        <h2 className="text-lg font-semibold mb-2 underline">Note:</h2>
                        <p className="text-gray-700">
                            Use an email address that ends with <span className="font-bold">@example.com</span> to place test orders. This domain is detected by Shopify's systems, is safe to use for test orders, won't trigger any spam detection, and will keep your inbox from being full. If you need to send test orders to your own email address as part of your testing, then make sure to send fewer than 100 test orders at a time to avoid any delivery issues with your inbox.
                        </p>
                    </div>
                    <div className="mt-2 p-4 rounded-lg">
                        <h2 className="text-lg font-semibold mb-4 underline">Test Order Checklist:</h2>
                        <ul className="list-disc pl-4">
                            <li className="text-gray-700 ml-2 mb-2">Place a test order by simulating a transaction</li>
                            <li className="text-gray-700 ml-2 mb-2">Place a test order with a real transaction</li>
                            <li className="text-gray-700 ml-2 mb-2">Test order checklist</li>
                        </ul>
                    </div>
                    <div className=" p-4 rounded-lg mb-4">
                        <h2 className="text-lg font-semibold mb-2  underline ">Place a test order by simulating a transaction</h2>
                        <p className="text-gray-700 ml-2">
                            To simulate a transaction on your online checkout, you can set up Shopify's Bogus Gateway. Bogus Gateway is a payment provider that any store can use to create test orders. When Bogus Gateway is active, every order that you create is a test order. The test purchase amount needs to be greater than the equivalent of 1 USD in any currency.
                        </p>
                    </div>
                    <div className="bg-blue-100 p-4 border border-grey-200 rounded-2xl mb-4">
                        <h2 className="text-lg font-semibold mb-2 underline ">Tip:</h2>
                        <p className="text-gray-700">
                            If you're using Shopify Payments, then you can create test orders by enabling Shopify Payments test mode. Learn more in Testing Shopify Payments.
                        </p>
                    </div>
                    <p>To create an order, you need to enter test payment information at checkout. You can simulate different types of transactions, depending on what information you enter.</p>
                    <strong className='flex mt-4 underline'>Steps</strong>
                    <div className="accordion mt-3">
                        {/* <button className="accordion-btn">Accordion 1</button> */}
                        <First />
                        <Second />
                        <Third />
                    </div>
                    {/* description after the Third Component */}
                    <div className="bg-gray-200 p-4 rounded-2xl mb-4 mt-3">
                        <h2 className="text-lg font-semibold mb-2">Steps to Deactivate Credit Card Payment Provider:</h2>
                        <ol className="list-decimal pl-6">
                            <li className="text-gray-700 mb-2">If you have a credit card payment provider enabled, then deactivate it before continuing.</li>
                            <li className="text-gray-700 mb-2">Click <span className="font-semibold">Manage</span> &gt; <span className="font-semibold">Deactivate</span> (this button also shows the name of your payment provider, for example Deactivate Shopify Payments), then confirm your deactivation.</li>
                            <li className="text-gray-700 mb-2">Do one of the following:</li>
                            <ol className="list-decimal pl-6">
                                <li className="text-gray-700 mb-2">If you have Shopify Payments enabled:</li>
                                <ol className="list-decimal pl-6">
                                    <li className="text-gray-700 mb-2">In the Shopify payments section, click <span className="font-semibold">Manage</span>.</li>
                                    <li className="text-gray-700 mb-2">At the bottom of the page, click <span className="font-semibold">Switch to a third-party provider</span>, and then click <span className="font-semibold">Switch to a third-party provider</span> again to confirm.</li>
                                </ol>
                                <li className="text-gray-700 mb-2">If you don't have Shopify Payments enabled, then in the Shopify payments section, click <span className="font-semibold">See all other providers</span>.</li>
                                <li className="text-gray-700 mb-2">If Shopify Payments isn't available in your country, then in the Payment providers section, click <span className="font-semibold">Choose a provider</span>.</li>
                                <li className="text-gray-700 mb-2">Select (for testing) <span className="font-semibold">Bogus Gateway</span> from the list.</li>
                                <li className="text-gray-700 mb-2">Click <span className="font-semibold">Activate (for testing) Bogus Gateway</span>.</li>
                                <li className="text-gray-700 mb-2">Click <span className="font-semibold">Save</span>.</li>
                            </ol>
                            <li className="text-gray-700 mb-2">Go to your online store and place an order as a customer would. At checkout, enter the following credit card details instead of genuine numbers:</li>
                        </ol>
                    </div>
                    {/*table component  */}
                    <Table />
                    <div className=" p-4 rounded-lg mb-4">
                        <h2 className="text-lg font-semibold mb-2">Steps to Deactivate (for testing) Bogus Gateway:</h2>
                        <ol className="list-decimal pl-6">
                            <li className="text-gray-700 mb-2">After you're done testing, click <span className="font-semibold">Manage</span> next to (for testing) Bogus Gateway in your Shopify admin.</li>
                            <li className="text-gray-700 mb-2">Click <span className="font-semibold">Deactivate (for testing) Bogus Gateway</span> to remove this gateway from your checkout.</li>
                        </ol>
                    </div>
                    <strong>Place a test order with a real transaction</strong>
                    <div className=" bg-gray-400 border border-gray-200 rounded-2xl mt-3 p-4 mb-4">
                        <h2 className="text-lg font-semibold mb-2">Note:</h2>
                        <p className="text-gray-700">
                            Not all test orders can be deleted. For example, orders placed through payment gateways other than Shopify Payments aren't considered test orders, even when the third-party gateway was in test mode, and so can't be deleted.
                        </p>
                    </div>
                    <p>You can place a test order using a real payment provider, and then immediately cancel and refund the order. You might be subject to fees from the payment processor you use. Some payment processor fees and credit card third-party transaction fees aren't returned to you when you issue a refund.</p>
                    <div className="bg-yellow-100 border border-yellow-200 rounded-2xl mt-2 p-4 mb-4">
                        <h2 className="text-lg font-semibold mb-2">Caution:</h2>
                        <p className="text-gray-700">
                            Before you test a payment gateway with a real transaction, refer to the terms of service for your payment provider. If you use Shopify Payments, then refer to the Shopify Payments Terms of Service for your region.
                        </p>
                    </div>
                    <p>If you're using a development store, then you can't test using real transactions. For more information, refer to Testing orders in development stores.</p>
                    <div className=" p-4 mb-4">
                        <h2 className="text-lg font-semibold mb-2">Steps:</h2>
                        <ol className="list-decimal pl-6">
                            <li className="text-gray-700 mb-2">Make sure that you've set up the payment provider that you want to test.</li>
                            <li className="text-gray-700 mb-2">Make a purchase from your store as a customer would, and complete checkout using genuine credit card details.</li>
                            <li className="text-gray-700 mb-2">If you're using a third-party payment provider, then log in to your payment provider and make sure that the funds were processed.</li>
                            <li className="text-gray-700 mb-2">Cancel and refund the order as soon as possible to refund yourself. Any third-party transaction fees that have been charged aren't refunded.</li>
                        </ol>
                    </div>

                    <div className=" p-4 rounded-lg mb-4">
                        <h2 className="text-lg font-semibold mb-2">Test order checklist:</h2>
                        <p className="text-gray-700">When testing your order flow, you should test as many scenarios as possible to ensure that your shipping settings, notifications, and fulfillment flows work as expected.</p>
                    </div>

                    <div className=" p-4  mb-4">
                        <h2 className="text-lg font-semibold mb-2">Creating a test order:</h2>
                        <ul className="list-disc pl-6">
                            <li className="text-gray-700 mb-2">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 rounded" id="discount-code" />
                                <label htmlFor="discount-code" className="ml-2">Add a discount code to your order.</label>
                            </li>
                            <li className="text-gray-700 mb-2">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 rounded" id="customer-account" />
                                <label htmlFor="customer-account" className="ml-2">Try placing an order when logged into a customer account, and logged out.</label>
                            </li>
                            <li className="text-gray-700 mb-2">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 rounded" id="payment-methods" />
                                <label htmlFor="payment-methods" className="ml-2">Test different payment methods.</label>
                            </li>
                            <li className="text-gray-700 mb-2">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 rounded" id="shipping-rates" />
                                <label htmlFor="shipping-rates" className="ml-2">Verify that the shipping rates you offer display correctly.</label>
                            </li>
                            <li className="text-gray-700 mb-2">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 rounded" id="shipping-addresses" />
                                <label htmlFor="shipping-addresses" className="ml-2">Test different shipping addresses, with particular attention to how the tax is calculated.</label>
                            </li>
                            <li className="text-gray-700 mb-2">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 rounded" id="multiple-devices" />
                                <label htmlFor="multiple-devices" className="ml-2">Place test orders on multiple devices, such as desktop and mobile devices.</label>
                            </li>
                            <li className="text-gray-700 mb-2">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 rounded" id="failed-transaction" />
                                <label htmlFor="failed-transaction" className="ml-2">Simulate a failed transaction.</label>
                            </li>
                        </ul>
                    </div>

                    <div className=" p-4  mb-4">
                        <h2 className="text-lg font-semibold mb-2">After your test order is placed:</h2>
                        <ul className="list-disc pl-6">
                            <li className="text-gray-700 mb-2">
                                <input type="checkbox" id="order-notification" className="form-checkbox h-5 w-5 text-gray-600 rounded" />
                                <label htmlFor="order-notification" className="ml-2">Verify that you’re satisfied with the order notification. Learn more about customizing your email templates from your Shopify admin.</label>
                            </li>
                            <li className="text-gray-700 mb-2">
                                <input type="checkbox" id="fulfillment-flow" className="form-checkbox h-5 w-5 text-gray-600 rounded" />
                                <label htmlFor="fulfillment-flow" className="ml-2">Test the fulfillment flow, whether it’s manual or through an app or enterprise resource planning (ERP) software.</label>
                            </li>
                            <li className="text-gray-700 mb-2">
                                <input type="checkbox" id="tracking-information" className="form-checkbox h-5 w-5 text-gray-600 rounded" />
                                <label htmlFor="tracking-information" className="ml-2">Add tracking information to the order, and then check the shipping notification.</label>
                            </li>
                            <li className="text-gray-700 mb-2">
                                <input type="checkbox" id="partially-fulfilled-order" className="form-checkbox h-5 w-5 text-gray-600 rounded" />
                                <label htmlFor="partially-fulfilled-order" className="ml-2">Test a partially fulfilled order.</label>
                            </li>
                            <li className="text-gray-700 mb-2">
                                <input type="checkbox" id="issue-refund" className="form-checkbox h-5 w-5 text-gray-600 rounded" />
                                <label htmlFor="issue-refund" className="ml-2">Try to issue a full or partial refund.</label>
                            </li>
                        </ul>
                    </div>

                    <footer className="bg-gray-900 text-white py-4 border-t border-gray-700">
                        <div className="container mx-auto flex justify-between items-center px-4">
                            <div>
                                <p>Terms of Service</p>
                                <p>Privacy Policy</p>
                            </div>
                            <div>
                                <p>&copy; 2024 Your Company</p>
                            </div>
                        </div>
                    </footer>


                </div>
            </div>

        </Fragment>
    )
}

export default page