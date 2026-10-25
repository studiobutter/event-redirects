# Event Redirections

This repo is use to redirect user to an app (if it's already installed) or a website.

This is use to create Custom Links that open a certain app or website on device.

Use for certain areas like Discord Event Tab and click events

App opening uses URI Schemes to achive this.

## InAppBrowserRedirect Component

The `InAppBrowserRedirect` component is a modular component that handles in-app browser detection and redirection with support for multiple languages.

### Usage

```jsx
import InAppBrowserRedirect from './components/InAppBrowserRedirect';

// Default (English)
<InAppBrowserRedirect />

// With language prop
<InAppBrowserRedirect language="zh" />
<InAppBrowserRedirect language="vi" />
```

### Supported Languages

- `en` - English (default)
- `zh` - Chinese (Simplified)
- `vi` - Vietnamese

### Backward Compatibility

For backward compatibility, the following named exports are available:

```jsx
import { InAppBrowserRedirectZH, InAppBrowserRedirectVI } from './components/InAppBrowserRedirect';

// These are equivalent to:
<InAppBrowserRedirect language="zh" />
<InAppBrowserRedirect language="vi" />
```

### Features

- Detects various in-app browsers (Instagram, Facebook, Twitter, etc.)
- Automatically attempts to open links in system browsers
- Shows fallback UI with localized text when redirection fails
- Supports iOS and Android platforms
- Handles different browser detection patterns
