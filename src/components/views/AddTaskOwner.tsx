import React from 'react';
import {View, Text} from 'react-native';
import TaskOwnerForm from '../TaskOwnerForm';

const AddTaskOwner: React.FC = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 28}}>Add task owner</Text>
      <View style={{width: 300}}>
        <TaskOwnerForm />
      </View>
    </View>
  );
};

export default AddTaskOwner;
