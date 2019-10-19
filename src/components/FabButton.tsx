import React from 'react';
import ActionButton from 'react-native-action-button';

const FabButton: React.FC<ActionButtonProps> = props => {
  return <ActionButton buttonColor={props.color} onPress={props.action} />;
};

interface ActionButtonProps {
  color: string;
  action: () => void;
}

export default FabButton;
