'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
 const stripe = require('stripe')(
   "sk_test_51LTGC5IhCcFUTf63JDoTD9uxdtpQiZkLSY8iX7tg7sG3yBrWEqXC0TMvi6mLa6xgu359FVpiPPthfAnqMuxXrobK00YOFnfkkI"
  );

module.exports = {
  /**
   * Create a/an order record.
   *
   * @return {Object}
   */

  //注文を作成する
  create: async (ctx) => {
    const { address, amount, dishes, token } = JSON.parse(ctx.request.body);
    const charge = await stripe.charges.create({
      amount: amount,
      currency: 'jpy',
      source: token,
      description: `Order${new Date()}by ${ctx.state.user._id}`,
    });
    const order = await strapi.services.order.create({
      user: ctx.state.user.id,
      charge_id: charge.id,
      amount: amount,
      address,
      dishes,
    })
    return order
  }
};
