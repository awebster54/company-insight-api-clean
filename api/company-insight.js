// api/company-insight.js

export default (req, res) => {
    const companyData = {
        Amazon: {
            competitors: ["Walmart", "Alibaba", "Target", "eBay", "Shopify"],
            customers: ["Procter & Gamble", "Unilever", "Apple", "Samsung", "Nike"],
            vendors: ["Foxconn", "Intel", "AMD", "UPS", "FedEx"],
            staffing_agencies: ["Adecco", "Kelly Services", "Randstad"]
        },
        Samsung: {
            competitors: ["Apple", "Sony", "LG", "Huawei", "Xiaomi"],
            customers: ["AT&T", "Verizon", "Sprint", "T-Mobile", "Best Buy"],
            vendors: ["Foxconn", "Qualcomm", "TSMC", "Corning", "SK Hynix"],
            staffing_agencies: ["Robert Half", "Manpower", "Aerotek"]
        }
    };

    const { name } = req.query;
    const data = companyData[name] || { error: `No data available for company: ${name}` };
    res.status(200).json(data);
};
