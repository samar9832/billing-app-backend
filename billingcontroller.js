exports.getBillingData = (req, res) => {
  res.json({
    message: 'Billing data fetched successfully',
    data: {
      invoices: [],
      totalDue: '$0.00',
    }
  });
};
