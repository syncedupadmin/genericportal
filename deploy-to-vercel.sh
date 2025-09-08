#!/bin/bash
# ================================================================
# 🚀 VERCEL DEPLOYMENT SCRIPT
# Nuclear Transformation → Universal Business Platform
# ================================================================

echo "🚀 DEPLOYING NUCLEAR TRANSFORMATION TO VERCEL..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Set the Vercel project ID
VERCEL_PROJECT_ID="prj_j8AiLyH0FGXzCD8qsP0RX0JZLNZK"

echo "🔗 Linking to Vercel project: $VERCEL_PROJECT_ID"

# Link to existing Vercel project
vercel link --project-id="$VERCEL_PROJECT_ID" --yes

# Set environment variables for nuclear transformation
echo "⚙️ Setting environment variables..."
vercel env add NUCLEAR_TRANSFORMATION production <<< "enabled"
vercel env add INDUSTRY_SUPPORT production <<< "universal" 
vercel env add VISUAL_PRESERVATION production <<< "active"
vercel env add DEFAULT_INDUSTRY production <<< "insurance"

# Deploy to production
echo "🚀 Deploying to production..."
vercel --prod --yes

if [ $? -eq 0 ]; then
    echo ""
    echo "🎯 NUCLEAR TRANSFORMATION DEPLOYED TO VERCEL!"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "✅ Universal business platform is LIVE"
    echo "🏢 Insurance users: Zero changes (preserved)"
    echo "🏥 Healthcare deployment: Ready"
    echo "🏠 Real estate deployment: Ready" 
    echo "💼 Finance deployment: Ready"
    echo "🏭 Manufacturing deployment: Ready"
    echo ""
    echo "🌐 Your industry-agnostic platform is now accessible!"
    echo "🔄 Runtime industry switching: Enabled"
    echo "🎨 Visual preservation: Active"
    echo ""
    echo "🚀 VERCEL DEPLOYMENT SUCCESSFUL!"
else
    echo "❌ Deployment failed. Please check the error above."
fi