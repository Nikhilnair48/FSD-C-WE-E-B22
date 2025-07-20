Reference: Review lecture 27 for more on class components

# Question: is class component necessary to remember,and can you explain that life cycle of of the same?

- Default way to define components in React when it was initially created
- React v16.8 -> allowed creation functional components -> ~2019

Life cycles of a component:
- Mounting (the component is created and inserted into the DOM)
- Updating (when the component's props or state changes)
- Unmounted (when the component is removed from the DOM)

Mounting
  |
  v
Updating
  |
  v
Unmounting

## Mounting

constructor() - initialize your state, bind methods
getDerivedStateFromProps() -  update your state before the component is mounted
render() - return the JSX
componentDidMount() - run after first render (eg: make an API call to fetch data)

## Updating
shouldComponentUpdate() - optimize re-renders
render() - JSX updates
componentDidUpdate() - run after update

## Unmounting
componentWillUnmount - right before the component unmounts (eg: remove any listeners)


class HelloWord extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <> </>
        )
    }
}


# HOC - what are higher order components?

Javascript is a functional programming language
 - also has Object Oriented Programing paradigm - OOP

A function that takes a component and returns a new component with additional functionality
This pattern helps in reusing component logic

Let's say you've a component: Page
You need the Page component to always require authentication

<!-- withAuthentication.jsx -->
const withAuthentication = (props) => {
    // perform all auth checks
}

const withLogging = (props) => {
    // log when the component renders or re-renders
}

<!-- Page.jsx -->
const Page = () => {

}

export default withAuthentication(withLogging(Page));

<!-- memo - HOC: unless the props for this component changes, comoponent will not be re-rendered -->
