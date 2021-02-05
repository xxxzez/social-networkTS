// import React from 'react'
// import { ProfileStatus } from './ProfileStatus'
// import { create } from 'react-test-renderer'

// describe('ProfileStatus', () => {
//     test('after creation span should be displayed', () => {
//         const component = create(
//             <ProfileStatus status="tommy" updateStatus={(status) => {}} />
//         )
//         const root = component.root
//         const span = root.findByType('span')
//         expect(span.children.length).toBe(1)
//     })
//     test('after creation input should"t be displayed', () => {
//         const component = create(
//             <ProfileStatus status="tommy" updateStatus={(status) => {}} />
//         )
//         const root = component.root
//         expect(() => {
//             root.findByType('input')
//         }).toThrow()
//     })
//     test('after creation span should contains correct status', () => {
//         const component = create(
//             <ProfileStatus status="tommy" updateStatus={(status) => {}} />
//         )
//         const root = component.root
//         const span = root.findByType('span')
//         expect(span.children[0]).toBe('tommy')
//     })
//     test('input should be displayed in editMode instead of span', () => {
//         const component = create(
//             <ProfileStatus status="tommy" updateStatus={(status) => {}} />
//         )
//         const root = component.root
//         const span = root.findByType('span')
//         span.props.onClick()
//         const input = root.findByType('input')
//         expect(input.props.value).toBe('tommy')
//     })
// })
