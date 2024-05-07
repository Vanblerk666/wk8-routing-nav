// Single post page

// export default function SinglePostPage({ params }) {
//   console.log(params);
//   console.log("This is where the server is running");
//   return (
//     <div>
//       <h2>Single post page</h2>
//       <p>
//         Here we could do a fetch to go and get the info for post with ID of{" "}
//         {params.id}
//       </p>
//     </div>
//   );
// }

// Dynamic parameter retrieval of posts by id
// ~View at: http://localhost:3001/posts/1

export default function PostPage({ params }) {
  console.log(params); // Output: { id: 1 }
  return <h1>Post Page {params.id}</h1>; // Output: Post Page 1
}
