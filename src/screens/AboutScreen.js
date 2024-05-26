import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Button,
  Modal,
  StyleSheet,
  TextInput,
} from 'react-native';
import UpdatePost from '../components/UpdatePost';
import AllPosts from '../components/AllPosts';

const AboutScreen = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false); // Corrected variable name
  const [selectedPost, setSelectedPost] = useState([]);

  async function getApiData() {
    const url = 'http://10.0.2.2:3000/users';
    try {
      let result = await fetch(url);
      result = await result.json();
      setData(result);
    } catch (error) {
      console.warn('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getApiData();
  }, []);

  const editPost = (data) => {
    setShowModal(true);
    setSelectedPost(data);
  };

  const deletePost = async postId => {
    const url = 'http://10.0.2.2:3000/users';
    try {
      let result = await fetch(`${url}/${postId}`, {
        method: 'delete',
      });
      console.warn(result);
      result = await result.json();
      if (result) {
        console.warn('Post deleted');
        getApiData();
      }
    } catch (error) {
      console.warn('Error deleting post:', error);
    }
  };

  const searchSpecificPost = async (text) => {
    const url = `http://10.0.2.2:3000/users?q=${text}`;
    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        setData(data);
      } else {
        console.warn('Failed to fetch posts:', response.statusText);
      }
    } catch (error) {
      console.warn('Error fetching posts:', error);
    }
  };

  // Transforming data to ensure consistency in body key
  const transformedData = data.map(item => ({
    id: item.id,
    title: item.title,
    body: item.body || item.bodyText // Ensuring 'body' key is used
  }));

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', flexWrap: 'wrap' }}>
        <Text style={{ fontSize: 26, fontWeight: '900' }}>
          This is AboutScreen just for checking API calling & stack Navigation!
        </Text>
        <TextInput
          placeholder="Search Post..."
          style={styles.searchPost}
          onChangeText={text => searchSpecificPost(text)}
        />
        <AllPosts transformedData={transformedData} deletePost={deletePost} editPost={editPost} />
      </View>
      <UpdatePost
        showModal={showModal}
        setShowModal={setShowModal}
        selectedPost={selectedPost}
        getApiData={getApiData}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchPost: {
    borderWidth: 2,
    borderColor: 'grey',
    width: '95%',
    borderRadius: 12,
    margin: 15,
    padding: 10,
    fontSize: 20,
  },
});

export default AboutScreen;
