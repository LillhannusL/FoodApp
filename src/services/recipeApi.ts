const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY

    const fetchMockData = async () => {
      try {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`,
        );
        const data = await res.json();
        console.log("Här är din mock-data, kopiera hela detta objekt:");
        console.log(JSON.stringify(data, null, 2));
      } catch (err) {
        console.error("Fel vid hämtning:", err);
      }
    };

