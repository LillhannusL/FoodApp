## About CulinaryQuest

CulinaryQuest is a recipe discovery platform designed to take the stress out of meal planning. Whether you have specific ingredients in your fridge or a particular craving, the app provides personalized suggestions to help you get cooking.

### Key Functionalities
- **Personalized Quiz:** Uses custom logic to match your dietary needs and meal preferences with the perfect dish.
- **Ingredient Search:** Filters recipes based on what you already have at home or crave.
- **Favorites & Profiles:** Save your best finds to your personal account.

### API Failover & Mock Data (Critical Info)
To ensure a seamless experience during evaluation and presentations, I have implemented:

- **The Problem:** Third-party APIs like Spoonacular have strict daily request limits.
- **The Solution:** If the API reaches its credit limit, the application automatically switches to a built-in **Mock Service**.
- **The Result:** You can still test the Search, Quiz, and Favorites features even if the live API is offline.
