# Signing into VS Code, Gitlens, and Actions

It is possible to use VS Code without signing it, but many tools and extensions require it. You will use your Github account to sign in for each item. Once you do this, you should stay signed in unless you manually sign out.

## Part 1 - Sign In to VS Code & Github Copilot

Signing in will give you access to advanced tools in VS Code and will also automatically install the Github Copilot and Github Copilot Chat Extensions.

### Step 1 - Click Sign In

Use the Account menu to sign in.

![Sign in to use AI features - clicking the account menu](Workshop2/signIn/01_SignInForAI.png)

- Click the Account menu in the bottom left
- Select 'Sign in to use AI features…\`

### Step 2 - Select to Sign In with Github

You can sign in to VS Code with a variety of accounts, but you should always choose to use your Github account to keep things organized

![Continue with Github dialog](Workshop2/signIn/02_ContinueWithGithub.png)

- From the popup, choose 'Continue with Github'

### Step 3 - Authorize in the Browser

If you are already signed into your Github account online, it will ask you Authorize. If not it will ask you sign in first.

![Github authorization page in browser](Workshop2/signIn/browserAuth.png)

- Click Continue

### Step 4 - Check that you now have Copilot Extensions

These steps will install both Copilot extensions and attach them to your Github account.

![Github Copilot extensions installed](Workshop2/signIn/copilotExtensions.png)

## Part 2 - Sign In to Gitlens

### Step 1 - Select it from the Account Menu

To connect Gitlens to your Github account, you need to sign in and authorize it

![Sign in with Github to use GitLens option](Workshop2/signIn/03_signInGitlens.png)

- Click your Account menu
- Select Sign In with Github to use GitLens - Git supercharged

### Step 2 - Authorize in the browser

If you are already signed into your Github account online, it will ask you Authorize. If not it will ask you sign in first.

![Github authorization page in browser for GitLens](Workshop2/signIn/browserAuth.png)

- Click Continue

## Part 3 - Allow Access for Github Actions

We need to authorize the Github Actions extension, so that it can access our account and repos.

### Step 1 - Select it from the Account Menu

For security, you must explicitly grant the extension access to your account.

![Grant access to Github for Github Actions option](Workshop2/signIn/04_accessActions.png)

- Click your Account menu
- Select Grant access to Github for Github Actions…

### Step 2 - Confirm the account to connect

Select your Github account id from the command palette

![Choose Github account from command palette](Workshop2/signIn/05_chooseAccount.png)