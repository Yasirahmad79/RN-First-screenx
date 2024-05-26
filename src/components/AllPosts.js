import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const AllPosts = ({transformedData, deletePost, editPost}) => {
  return (
    <View>
      {transformedData.length ? (
        transformedData.map(item => (
          <View style={styles.main} key={item.id}>
            <Text style={{fontSize: 15, color: 'red'}}>{item.id}.</Text>
            <Text style={styles.postTitle}>{item.title}.</Text>
            <Text style={{fontSize: 20}}>{item.body}.</Text>
            <View style={{margin: 8}}>
              <Button title="Delete Post" onPress={() => deletePost(item.id)} />
            </View>
            <View style={{margin: 8}}>
              <Button title="Edit Post" onPress={() => editPost(item)} />
            </View>
          </View>
        ))
      ) : (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text>No posts found</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
    main: {
      minWidth: '94%',
      borderWidth: 2,
      borderColor: 'purple',
      borderRadius: 10,
      margin: 10,
      padding: 10,
    },
    postTitle: {
      fontSize: 25,
      fontStyle: 'italic',
      fontWeight: '800',
    }
})
export default AllPosts;
