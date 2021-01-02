import Badge from 'react-bootstrap/Badge'

function CounterBadge (props) {
	const User = props.loginUser
	const totalMessages = props.totalMessages
	return (
		<div>
		  <Badge pill variant="primary">Total Messages: {totalMessages}</Badge>{' '}
		  <Badge pill variant="danger">You: {User}</Badge>{' '}
		</div>
	)
}

const Counters = (props) => {
  const { totalMessages, loginUser } = props;
  return (
	<CounterBadge totalMessages={totalMessages} loginUser={loginUser} />
  )
}
export default Counters;
