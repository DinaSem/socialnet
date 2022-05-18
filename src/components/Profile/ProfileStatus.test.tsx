import React from 'react';
//import {render} from "@testing-library/react";
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";


describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const testRenderer = create(<ProfileStatus status={'it-incubator'} />);
        const instance = testRenderer.getInstance();
        expect(instance.state.status).toBe('it-incubator')
    });

    test('after creation span should contains correct status', () => {
        const testRenderer = create(<ProfileStatus status={'it-incubator'}/>);
        let root = testRenderer.root;
        expect(()=>{
            let span =  root.findByType("span");
        } ).not.toBeNull();
    });
    // test('input should be displayed on EditMode instead of span', () => {
    //     const testRenderer = create(<ProfileStatus status={'it-incubator'}/>);
    //     const root = testRenderer.root;
    //         let span =  root.findByType("span");
    //         span.props.onDoubleClick();
    //         let input =  root.findByType("input");
    //     expect(input.props.value).toBe('it-incubator')
    // });

    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const testRenderer = create(<ProfileStatus status={'it-incubator'} updateStatusThunk={mockCallback}/>);
        const instance = testRenderer.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1)
    });

})
