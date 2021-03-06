import React from 'react'

const SignInWithSlack = () => {
  const href =
    `https://slack.com/oauth/v2/authorize?user_scope=identity.basic,identity.avatar&client_id=3364554065.1020069085329&redirect_uri=${SLACK_REDIRECT}`
  return (
    <a className="sign-in-with-slack" href={ href }>
      <img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" />
    </a>
  )
}

export default SignInWithSlack