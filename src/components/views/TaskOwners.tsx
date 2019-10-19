import React from 'react';
import {View, FlatList} from 'react-native';
import taskOwnerActions from '../../actions/taskOwnerActions';
import FabButton from '../FabButton';
import {TaskOwner} from 'src/types/taskOwner';
import {connect} from 'react-redux';
import OwnerListItem from '../OwnerListItem';

export const TaskOwners: React.FC<TaskOwnersProps> = props => {
  console.log(props);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <FlatList
        data={Object.values(props.owners)}
        renderItem={({item}) => (
          <OwnerListItem
            id={item.id}
            name={item.name}
            editOwner={() => console.log('hola')}
            removeOwner={() => console.log('hola')}
          />
        )}
        keyExtractor={item => item.id}
      /> */}
      <FabButton
        color="dodgerblue"
        action={() => props.navigation.navigate('AddTaskOwner')}
      />
    </View>
  );
};

interface StateProps {
  owners: [TaskOwner];
}

interface DispatchProps {
  removeOwner: (taskOwner: TaskOwner) => void;
  updateOwner: (taskOwner: TaskOwner) => void;
}

interface OwnProps {
  navigation: any;
}

type TaskOwnersProps = DispatchProps & StateProps & OwnProps;

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    removeOwner: (taskOwner: TaskOwner) =>
      dispatch(taskOwnerActions.removeTaskOwner(taskOwner)),
    updateOwner: (taskOwner: TaskOwner) =>
      dispatch(taskOwnerActions.updateTaskOwner(taskOwner)),
  };
};

const mapStateToProps = state => {
  return {
    owners: state,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskOwners);
