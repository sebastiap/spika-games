export const getBoardGames = async () => {
    try {
      let url = `https://api.boardgameatlas.com/api/search?limit=20&client_id=JLBr5npPhV`;
      const response = await fetch(url);
  
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  