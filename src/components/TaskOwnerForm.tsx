import React from 'react';
import uuidv4 from 'uuid/v4';
import {Formik} from 'formik';
import {TaskOwner} from 'src/types/taskOwner';
import taskOwnerActions from '../actions/taskOwnerActions';
import {connect} from 'react-redux';
import {Button, TextInput, View, Text} from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

import {withNavigation} from 'react-navigation';

const TaskOwnerForm: React.FC<TaskOwnerFormProps> = props => {
  return (
    <Formik
      initialValues={{id: '', name: ''}}
      onSubmit={(owner: TaskOwner, actions) => {
        owner.id = uuidv4();
        props.addOwner(owner);
        props.navigation.goBack();
      }}>
      {props => (
        <View>
          <Text>Owner Name</Text>
          <TextInput
            style={{
              marginBottom: 10,
              marginTop: 10,
              borderRadius: 8,
              borderColor: 'dodgerblue',
              borderWidth: 1,
            }}
            onChangeText={props.handleChange('name')}
            value={props.values.name}
          />
          <Button onPress={props.handleSubmit} title="Add" />
        </View>
      )}
    </Formik>
  );
};

interface OwnProps {
  navigation?: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface DispatchProps {
  addOwner: (taskOwner: TaskOwner) => void;
}

type TaskOwnerFormProps = DispatchProps & OwnProps;

const mapDispatchToProps = (dispatch: any) => {
  return {
    addOwner: (taskOwner: TaskOwner) =>
      dispatch(taskOwnerActions.addTaskOwner(taskOwner)),
  };
};

export default withNavigation(
  connect(
    null,
    mapDispatchToProps,
  )(TaskOwnerForm),
);
