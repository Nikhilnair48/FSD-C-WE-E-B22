// (Assuming getUserIDPromise, fetchUserDataPromise, fetchUserPostsPromise return Promises)
async function processUserDataSequence() {
  try {
    console.log("Starting async/await sequence...");
    const userId = await getUserIDPromise();
    const userData = await fetchUserDataPromise(userId);
    const posts = await fetchUserPostsPromise(userData);
    console.log("Async/await - Successfully fetched posts:", posts);
    console.log("Async/await sequence complete!");
  } catch (error) {
    console.error("Error in async/await sequence:", error.message);
  }
}
processUserDataSequence();