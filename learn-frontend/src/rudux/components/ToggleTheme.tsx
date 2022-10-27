import React from 'react';
import styled from "styled-components";

import {useAppDispatch} from "../store/hooks";
import {themeSlice} from "../store/slices/themeSlice";



const ToggleTheme = () => {
    const dispatch = useAppDispatch()

    function changeThemeHandler() {
        dispatch(themeSlice.actions.changeTheme())
    }

    return (
        <StyledButtonToggleTheme>
            <button onClick={changeThemeHandler}>toggle theme</button>
        </StyledButtonToggleTheme>
    );
};

const StyledButtonToggleTheme = styled.div`
  text-align: center;

  button {
    border: none;
    padding: 20px;
    margin: 20px;
    font-size: 20px;
    background-color: #1B7DFF;
    color: white;
    border-radius: 5px;
    cursor: pointer;

    transition: opacity .2s;

    &:hover {
      opacity: .8;
      box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
    }

    &:active {
      opacity: 0.5;
    }
  }`


export default ToggleTheme;
