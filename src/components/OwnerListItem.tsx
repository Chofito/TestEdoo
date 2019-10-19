import React from 'react';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
} from 'react-native-material-cards';

const OwnerListItem: React.FC<OwnerListItemsProps> = props => {
  return (
    <Card>
      <CardTitle title={props.name} />
      <CardContent text={props.id} />
      <CardAction separator={true} inColumn={false}>
        <CardButton
          onPress={props.editOwner(props.id)}
          title="Edit"
          color="green"
        />
        <CardButton
          onPress={props.removeOwner(props.id)}
          title="Remove"
          color="red"
        />
      </CardAction>
    </Card>
  );
};

interface OwnerListItemsProps {
  id: string;
  name: string;
  removeOwner: (id: string) => void;
  editOwner: (id: string) => void;
}

export default OwnerListItem;
