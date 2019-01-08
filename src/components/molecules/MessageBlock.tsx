import * as React from 'react';
import UserAvatar from "../atoms/UserAvatar";
import {ESizes} from "../../theme";
import styled from "styled-components";

interface IState {

}

interface IProps {

}

class MessageBlock extends React.Component<IProps, IState> {
    public state: IState = {};

    public render() {
        return (
            <MessageBlockStyled>
                <UserAvatar userId="123" size={ESizes.MEDIUM} />
                <Wrap>
                    <Meta>
                        <UserName>Sonia</UserName>
                        <Date>4:35 PM</Date>
                    </Meta>
                    <Text>Hello! Where r u?</Text>
                </Wrap>
            </MessageBlockStyled>
        );
    }
}

const MessageBlockStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 40px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  flex: 1;
  margin: 3px 0 3px 20px;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserName = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: #615375;
`;

const Text = styled.div`
  color: #4a4a4a;
`;

const Date = styled.div`
  color: #4a4a4a;
`;

export default MessageBlock;