export async function getNewsFeed() {
  try {
    let articles = await fetch(
      'https://run.mocky.io/v3/8486bb89-c415-4eed-ae7c-4ff4bbd47e50',
    );
    let result = await articles.json();
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}
