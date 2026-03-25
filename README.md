# 🏺 Taksha

**Taksha** — An e-commerce platform celebrating authentic, locally crafted products from Nepal. Discover handmade treasures that tell stories of tradition, craftsmanship, and cultural heritage.

## ✨ Features

- 🛒 Full shopping cart functionality
- 💳 Secure payments via Stripe
- 📦 Product catalog with categories
- 🖼️ Beautiful product imagery via Sanity CMS
- 📱 Fully responsive design
- ⚡ Built with Next.js for optimal performance

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **CMS:** [Sanity.io](https://www.sanity.io/)
- **Payments:** [Stripe](https://stripe.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [SASS](https://sass-lang.com/)
- **Language:** TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A [Sanity.io](https://www.sanity.io/) account
- A [Stripe](https://stripe.com/) account

### Installation

```bash
# Clone the repository
git clone https://github.com/aryalrojan/Taksha.git

# Navigate to project directory
cd taksha

# Install dependencies
yarn install

# Run development server
yarn dev
```

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Sanity
SANITY_PROJECT_TOKEN=your_sanity_token
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx
```

### Setting up Sanity

1. Create a project at [sanity.io/manage](https://www.sanity.io/manage)
2. Copy your project ID and dataset name to `.env.local`
3. Generate an API token and add it to your environment variables

### Setting up Stripe

1. Create a [Stripe](https://stripe.com/) account
2. Enable Test mode in your dashboard
3. Copy your API keys to `.env.local`

> 💡 **Test Card:** Use `4242 4242 4242 4242` with any future date and CVC for testing payments

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server |
| `yarn build` | Build for production |
| `yarn start` | Start production server |
| `yarn lint` | Run ESLint |

## 👤 Author

**Rojan Aryal**

- 🌐 Portfolio: [rojanaryal.com.np](https://rojanaryal.com.np)
- 💻 GitHub: [@aryalrojan](https://github.com/aryalrojan)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ in Nepal
</p>
