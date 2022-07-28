const pricingData = [
    {
        id: 1,
        title: "Basic",
        price: "19.00",
        isChilItem: [
            {id: 1, subItem: "Bandwidth: 1GB"},
            {id: 2, subItem: "Onlinespace: 100MB"},
            {id: 3, subItem: "Support: No"},
            {id: 4, subItem: "Domain: 05"},
            {id: 5, subItem: "Hidden Fees: No"},
        ],
    },
    {
        id: 2,
        title: "Popular",
        price: "39.00",
        isActive: true,
        isBtnActive: true,
        isChilItem: [
            {id: 1, subItem: "Bandwidth: 1.5GB"},
            {id: 2, subItem: "Onlinespace: 500MB"},
            {id: 3, subItem: "Support: Yes"},
            {id: 4, subItem: "Domain: 10"},
            {id: 5, subItem: "Hidden Fees: No"},
        ],
    },
    {
        id: 3,
        title: "Advance",
        price: "80.00",
        isChilItem: [
            {id: 1, subItem: "Bandwidth: 2GB"},
            {id: 2, subItem: "Onlinespace: 1MB"},
            {id: 3, subItem: "Support: Yes"},
            {id: 4, subItem: "Domain: 15"},
            {id: 5, subItem: "Hidden Fees: No"},
        ],
    },
    {
        id: 4,
        title: "Premium",
        price: "19.00",
        isChilItem: [
            {id: 1, subItem: "Bandwidth: 2.5GB"},
            {id: 2, subItem: "Onlinespace: 1.5MB"},
            {id: 3, subItem: "Support: No"},
            {id: 4, subItem: "Domain: 20"},
            {id: 5, subItem: "Hidden Fees: Yes"},
        ],
    },
];
export default pricingData;