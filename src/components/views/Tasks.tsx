import React from 'react';
import {Text, View} from 'react-native';
import taskActions from '../../actions/taskActions';
import FabButton from '../FabButton';
import {Task} from '../../types/task';
import {connect} from 'react-redux';

export const Tasks: React.FC<TasksProps> = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Holaaa</Text>
      <FabButton color="dodgerblue" action={() => undefined} />
    </View>
  );
};

interface StateProps {
  Tasks: [Task];
}

interface DispatchProps {
  removeTask: (Task: Task) => void;
  updateTask: (Task: Task) => void;
}

interface OwnProps {
  navigation: any;
}

type TasksProps = OwnProps & DispatchProps & StateProps;

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    removeTask: (Task: Task) => dispatch(taskActions.removeTask(Task)),
    updateTask: (Task: Task) => dispatch(taskActions.updateTask(Task)),
  };
};

const mapStateToProps = (state: any) => {
  return {
    Tasks: state.Tasks,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tasks);
