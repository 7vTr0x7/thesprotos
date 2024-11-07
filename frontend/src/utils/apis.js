// api.js
export const fetchMatchesData = async (apiUrl) => {
  const res = await fetch(`${apiUrl}/api/user/upcoming-matches`, {
    method: "GET",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to get data");
  return res.json();
};

export const fetchBlogsData = async (apiUrl) => {
  const res = await fetch(`${apiUrl}/api/user/blogs`, {
    method: "GET",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to get data");
  return res.json();
};
