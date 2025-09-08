// ================================================================
// 🚀 NUCLEAR TRANSLATION ENGINE
// VISUAL PRESERVATION SYSTEM
// ================================================================

// CRITICAL: This engine preserves exact insurance UI terminology
// while backend operates with generic business terms

class TranslationEngine {
    constructor() {
        this.translations = {
            // Backend term → UI display term
            representatives: "Agents",
            representative: "Agent",
            prospects: "Leads", 
            prospect: "Lead",
            agreements: "Policies",
            agreement: "Policy",
            incentives: "Commissions",
            incentive: "Commission",
            value_amount: "Premium",
            organization: "Agency"
        };
    }
    
    // Translate backend data to UI display
    translateToUI(genericTerm) {
        return this.translations[genericTerm] || genericTerm;
    }
    
    // Translate UI input to backend terms
    translateToBackend(uiTerm) {
        const reverse = Object.entries(this.translations)
            .find(([key, val]) => val === uiTerm);
        return reverse ? reverse[0] : uiTerm;
    }
}

// Global instance - preserves insurance terminology
window.translator = new TranslationEngine();

// RESULT: Users see "Agent Dashboard" 
// Backend processes "Representative Dashboard"
// ZERO visual changes for insurance users

console.log('🚀 Translation Engine: Insurance UI preserved, Backend genericized');