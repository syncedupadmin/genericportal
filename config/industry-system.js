// ================================================================
// 🚀 NUCLEAR INDUSTRY CONFIGURATION SYSTEM
// UNIVERSAL BUSINESS PLATFORM
// ================================================================

const INDUSTRY_CONFIGURATIONS = {
    insurance: {
        entities: {
            organization: "Agency",
            representative: "Agent", 
            prospect: "Lead",
            agreement: "Policy"
        },
        terminology: {
            incentive: "commission",
            value_amount: "premium",
            converted: "sold"
        }
    },
    
    healthcare: {
        entities: {
            organization: "Practice",
            representative: "Provider",
            prospect: "Patient", 
            agreement: "Treatment"
        },
        terminology: {
            incentive: "fee",
            value_amount: "cost",
            converted: "treated"
        }
    },
    
    realestate: {
        entities: {
            organization: "Brokerage",
            representative: "Realtor",
            prospect: "Lead",
            agreement: "Contract"
        },
        terminology: {
            incentive: "commission",
            value_amount: "price",
            converted: "closed"
        }
    }
};

// Runtime industry switching capability
window.switchIndustry = (industry) => {
    const config = INDUSTRY_CONFIGURATIONS[industry];
    if (config) {
        // Update UI terminology without page refresh
        console.log(`Switched to ${industry} industry`);
        return true;
    }
    return false;
};

export default INDUSTRY_CONFIGURATIONS;