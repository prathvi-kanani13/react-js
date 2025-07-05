import React, { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';
import CustomCard from '../components/CustomCard';
import CustomButton from '../components/CustomButton';
import axios from 'axios';

// Define the type for the fetched data
interface Post {
  id: number;
  title: string;
  body: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=3');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleClick = () => {
    alert('CustomButton clicked on Home Page!');
  };

  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h4" gutterBottom>
        Home Page
      </Typography>
      <Typography variant="body1" gutterBottom>
        This page demonstrates reusable components and API data fetching.
      </Typography>

      <Box mt={2}>
        <CustomButton Label="Click Me" onClick={handleClick} color="secondary" />
      </Box>

      {loading ? (
        <CircularProgress sx={{ mt: 4 }} />
      ) : (
        <Box display="flex" flexDirection="column" gap={2} mt={4} maxWidth={600} mx="auto">
          {posts.map((post) => (
            <CustomCard
              key={post.id}
              title={post.title}
              content={post.body}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Home;
