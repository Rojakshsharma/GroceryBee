# 🛠️ Setup Guide for Grocery Bee

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- Git
- Cloudinary and Stripe accounts

### 1. Clone the Repo
```bash
git clone git@github.com:your-username/GroceryBee.git
cd GroceryBee
```

### 2. Backend Setup
1. Navigate to `server`:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `server/.env`:
   ```env
   PORT=5000
   NODE_ENV=development
   ALLOWED_ORIGINS=http://localhost:5173
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   SELLER_EMAIL=your_admin_email
   SELLER_PASSWORD=your_admin_password
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   STRIPE_PUBLISHABLE_KEY=your_stripe_public_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_webhook_secret
   ```
   Replace placeholders with your credentials. **Never commit `.env`.**

4. Start the server:
   ```bash
   npm run server
   ```

### 3. Frontend Setup
1. Navigate to `client`:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `client/.env`:
   ```env
   VITE_BACKEND_URL=http://localhost:5000
   VITE_CURRENCY=$
   ```
4. Start the frontend:
   ```bash
   npm run dev
   ```

### 4. Build for Production
- **Backend**: `npm start` in `server`
- **Frontend**: `npm run build` in `client`