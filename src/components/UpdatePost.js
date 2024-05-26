import {useEffect, useState} from 'react';
import {TextInput, Button, StyleSheet, View, Modal} from 'react-native';

const UpdatePost = ({showModal, setShowModal, selectedPost, getApiData}) => {
  const [updateTitle, setUpdateTitle] = useState(undefined);
  const [updateBody, setUpdateBody] = useState(undefined);
  useEffect(() => {
    if (selectedPost) {
      setUpdateTitle(selectedPost.title);
      setUpdateBody(selectedPost.body);
    }
  }, [selectedPost]);
  const updatePost = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let id = selectedPost.id;
    try {
      let response = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: updateTitle, body: updateBody}),
      });
      response = await response.json();
      if (response) {
        getApiData();
        setShowModal(false);
      }
    } catch (error) {
      console.warn('Error updating post:', error);
    }
  };

  return (
    <Modal visible={showModal} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.ModalView}>
          <TextInput
            style={styles.modalInputs}
            value={updateTitle}
            onChangeText={text => setUpdateTitle(text)}
          />
          <TextInput
            style={styles.modalInputs}
            value={updateBody}
            onChangeText={text => setUpdateBody(text)}
          />
          <View style={{margin: 8}}>
            <Button title="Update" onPress={() => updatePost()} />
          </View>
          <View style={{margin: 8}}>
            <Button title="Close" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ModalView: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 5,
    shadowOpacity: 0.9,
  },
  modalInputs: {
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: 'skyblue',
  },
});

export default UpdatePost;
