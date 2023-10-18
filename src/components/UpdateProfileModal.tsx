import React, {useState} from 'react';
import {
  Text,
  View,
  Modal,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const UpdateProfileModal = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  const cancelModal = () => {
    props.setShowUpdateProfileModal(false);
  };

  return (
    <Modal visible={props.visible} transparent={true}>
      {/* ##### Modal Blur background View ##### */}
      <View
        style={{
          width: props.width,
          height: props.height,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}>
        {/* ##### Modal Container View ##### */}
        <View
          style={{
            backgroundColor: '#fff',
            // width: (props.width * 90) / 100,
            // height: (props.height * 55) / 100,
            flex: props.width < 400 ? 0.5 : 0.6,
            width: '90%',
            borderRadius: 20,
            alignItems: 'center',
            borderBottomRightRadius: 20,
          }}>
          {/* ##### Image Container View ##### */}

          <View
            style={{
              width: 160,
              height: 160,
              borderRadius: 80,

              position: 'relative',
              top: '-20%',
            }}>
            {/* ##### Profile Image  ##### */}

            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
              }}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 80,
                borderColor: '#EAEEFE',
                borderWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              resizeMode="center"
            />
            {/* ##### edit icon Image  ##### */}

            <Image
              source={require('../icons/edit.png')}
              style={{
                width: 27,
                height: 27,
                position: 'absolute',
                bottom: 10,
                right: 10,
              }}
            />
          </View>

          {/* ##### View of ScrollView Container ##### */}

          <View
            style={{
              width: '100%',
              flex: 1,
              marginTop: -70,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              overflow: 'hidden',
            }}>
            {/* ##### ScrollView ##### */}

            <ScrollView>
              <View style={{margin: 15}}>
                {/* ##### First Name TextInput ##### */}

                <TextInput
                  placeholder="First Name"
                  value={firstName}
                  onChangeText={txt => setFirstName(txt)}
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    borderRadius: 10,
                    paddingLeft: 10,
                    elevation: 10,
                    backgroundColor: '#fff',
                  }}
                />

                {/* ##### Last Name TextInput ##### */}

                <TextInput
                  placeholder="Last Name"
                  value={lastName}
                  onChangeText={txt => setLastName(txt)}
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    borderRadius: 10,
                    paddingLeft: 10,
                    elevation: 10,
                    backgroundColor: '#fff',
                    marginTop: 12,
                  }}
                />

                {/* ##### Email TextInput ##### */}

                <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={txt => setEmail(txt)}
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    borderRadius: 10,
                    paddingLeft: 10,
                    elevation: 10,
                    backgroundColor: '#fff',
                    marginTop: 12,
                  }}
                />

                {/* ##### Phone Number TextInput ##### */}

                <TextInput
                  placeholder="Phone No."
                  value={phoneNo ? `+91 ${phoneNo}` : phoneNo}
                  keyboardType="numeric"
                  onChangeText={txt => setPhoneNo(txt)}
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    borderRadius: 10,
                    paddingLeft: 10,
                    elevation: 10,
                    backgroundColor: '#fff',
                    marginTop: 12,
                    color: '#000',
                  }}
                />

                {/* ##### Button Container View ##### */}

                <View
                  style={{
                    flex: 1,
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  {/* ##### Save Button ##### */}

                  <TouchableOpacity
                    style={{
                      backgroundColor: '#18468C',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingVertical: 12,
                      borderRadius: 10,
                      elevation: 10,
                      flex: 1,
                      marginHorizontal: 5,
                    }}>
                    <Text style={{color: '#fff'}}>SAVE</Text>
                  </TouchableOpacity>

                  {/* ##### Cancel Button ##### */}

                  <TouchableOpacity
                    onPress={cancelModal}
                    style={{
                      backgroundColor: '#F68B29',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingVertical: 12,
                      borderRadius: 10,
                      elevation: 10,
                      flex: 1,
                      marginHorizontal: 5,
                    }}>
                    <Text style={{color: '#fff'}}>CANCEL</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default UpdateProfileModal;
