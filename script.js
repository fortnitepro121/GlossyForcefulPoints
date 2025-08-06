// Data for the commands (no changes here)
const commandsData = [
    { "id": 1, "name": "setprefix", "description": "Change the bot's command prefix for this server.", "arguments": ["prefix"], "permissions": ["Administrator"], "category": "server" },
    { "id": 2, "name": "boosterrole", "description": "Create your own custom role as a server booster.", "arguments": ["none"], "permissions": ["none"], "category": "server" },
    { "id": 3, "name": "boosterrole name", "description": "Change the name of your booster role.", "arguments": ["new name"], "permissions": ["booster"], "category": "server" },
    { "id": 3, "name": "nuke", "description": "Delete's the channel and remakes it", "arguments": ["manage_channels"], "permissions": ["manage_channels"], "category": "server" },
    { "id": 5, "name": "analytics", "description": "List all server analytics commmands.", "arguments": ["new icon"], "permissions": ["administrator"], "category": "server" },
    { "id": 5, "name": "analytics members", "description": "List member's analytics.", "arguments": ["none"], "permissions": ["administrator"], "category": "server" },
    { "id": 20, "name": "level", "description": "View your current level and XP progress.", "arguments": ["none"], "permissions": ["none"], "category": "leveling" },
    { "id": 20, "name": "level", "description": "View your current level and XP progress.", "arguments": ["member (optional)"], "permissions": ["none"], "category": "leveling" },
    { "id": 21, "name": "level help", "description": "Display all commands for the leveling system.", "arguments": ["none"], "permissions": ["none"], "category": "leveling" },
    { "id": 22, "name": "level message", "description": "Set a custom level-up message or embed for a specific channel.", "arguments": ["channel", "message_or_json"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 23, "name": "level message remove", "description": "Remove the level-up message configured for a specific channel.", "arguments": ["channel"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 24, "name": "level enable", "description": "Enable the leveling system for your server.", "arguments": ["none"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 25, "name": "level disable", "description": "Disable the leveling system for your server.", "arguments": ["none"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 26, "name": "level leaderboard", "description": "Show the server's level leaderboard.", "arguments": ["none"], "permissions": ["none"], "category": "server" },
    { "id": 27, "name": "level add", "description": "Manually add XP or levels to a member.", "arguments": ["member", "xp (optional)", "level (optional)"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 28, "name": "level reset", "description": "Reset a member's or all members' levels and XP.", "arguments": ["member (optional)"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 29, "name": "level view", "description": "View current leveling system settings.", "arguments": ["none"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 5, "name": "analytics channels", "description": "List channel's analytics.", "arguments": ["none"], "permissions": ["administrator"], "category": "server" },
    { "id": 5, "name": "analytics roles", "description": "List roles's analytics.", "arguments": ["none"], "permissions": ["administrator"], "category": "server" },
    { "id": 5, "name": "analytics activity (COMING SOON)", "description": "List activty's analytics.", "arguments": ["none"], "permissions": ["administrator"], "category": "server" },
    { "id": 5, "name": "quote", "description": "Quote's a member's message", "arguments": ["none"], "permissions": ["manage_messages"], "category": "server" },
    { "id": 17, "name": "invoke", "description": "The main command for customizing bot messages.", "arguments": [], "permissions": ["manage_guild"], "category": "server" },
    { "id": 18, "name": "invoke message ban", "description": "Set the public message for a ban. Use `None` to reset.", "arguments": ["message/JSON"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 19, "name": "invoke message kick", "description": "Set the public message for a kick. Use `None` to reset.", "arguments": ["message/JSON"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 20, "name": "invoke message jail", "description": "Set the public message for a jail action. Use `None` to reset.", "arguments": ["message/JSON"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 21, "name": "invoke message unmute", "description": "Set the public message for an unmute action. Use `None` to reset.", "arguments": ["message/JSON"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 22, "name": "invoke message timeout", "description": "Set the public message for a timeout. Use `None` to reset.", "arguments": ["message/JSON"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 23, "name": "invoke dm ban", "description": "Set the private DM for a ban. Use `None` to reset.", "arguments": ["message/JSON"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 24, "name": "invoke dm kick", "description": "Set the private DM for a kick. Use `None` to reset.", "arguments": ["message/JSON"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 25, "name": "invoke dm timeout", "description": "Set the private DM for a timeout. Use `None` to reset.", "arguments": ["message/JSON"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 26, "name": "invoke view", "description": "View the current custom messages and DMs for a moderation action.", "arguments": ["action"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 1, "name": "emoji", "description": "A group of commands for managing emojis.", "arguments": ["subcommand"], "permissions": ["none"], "category": "server" },
    { "id": 2, "name": "emoji steal", "description": "Steals one or more emojis from other servers.", "arguments": ["emojis"], "permissions": ["manage_emojis_and_stickers"], "category": "server" },
    { "id": 3, "name": "emoji add", "description": "Adds an emoji from a provided image URL.", "arguments": ["url", "name"], "permissions": ["manage_emojis_and_stickers"], "category": "server" },
    { "id": 4, "name": "emoji list", "description": "Lists all custom emojis on the server.", "arguments": ["none"], "permissions": ["none"], "category": "server" },
    { "id": 5, "name": "emoji remove", "description": "Removes one or more emojis from the server.", "arguments": ["emojis"], "permissions": ["manage_emojis_and_stickers"], "category": "server" },
    { "id": 6, "name": "emoji removedupes", "description": "Removes duplicate emojis from the server.", "arguments": ["none"], "permissions": ["manage_emojis_and_stickers"], "category": "server" },
    { "id": 7, "name": "sticker", "description": "A group of commands for managing stickers.", "arguments": ["subcommand"], "permissions": ["none"], "category": "server" },
    { "id": 8, "name": "sticker add", "description": "Adds a sticker from a provided image URL or attachment.", "arguments": ["url", "name", "description"], "permissions": ["manage_emojis_and_stickers"], "category": "server" },
    { "id": 9, "name": "sticker steal", "description": "Steals a sticker from another server using its ID.", "arguments": ["sticker"], "permissions": ["manage_emojis_and_stickers"], "category": "server" },
    { "id": 10, "name": "sticker list", "description": "Lists all custom stickers on the server.", "arguments": ["none"], "permissions": ["none"], "category": "server" },
    { "id": 11, "name": "sticker remove", "description": "Removes one or more stickers by name or ID.", "arguments": ["stickers"], "permissions": ["manage_emojis_and_stickers"], "category": "server" },
    { "id": 12, "name": "sticker removedupes", "description": "Removes duplicate stickers from the server.", "arguments": ["none"], "permissions": ["manage_emojis_and_stickers"], "category": "server" },
    { "id": 27, "name": "invoke variables", "description": "View all available placeholders for custom messages and DMs.", "arguments": ["none"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 5, "name": "boosters", "description": "List all server boosts", "arguments": ["none"], "permissions": ["none"], "category": "server" },
    { "id": 5, "name": "joined", "description": "Show when user joined", "arguments": ["member"], "permissions": ["none"], "category": "server" },
    { "id": 5, "name": "joins", "description": "Show Recent joins", "arguments": ["none"], "permissions": ["none"], "category": "server" },
    { "id": 5, "name": "forcenickname", "description": "Force a member's nickname. Call again without a nickname to remove the lock and reset.", "arguments": ["member","name"], "permissions": ["manage_nicknames"], "category": "server" },
    { "id": 5, "name": "roles", "description": "List all roles in the server.", "arguments": ["member","name"], "permissions": ["none"], "category": "server" },
    { "id": 5, "name": "roleplay on/off", "description": "Turn roleplay commands on or off", "arguments": ["on", "off"], "permissions": ["none"], "category": "server" },
    { "id": 5, "name": "kiss", "description": "Kiss a member.", "arguments": ["member"], "permissions": ["none"], "category": "server" },
    { "id": 5, "name": "slap", "description": "Slap a member", "arguments": ["member"], "permissions": ["none"], "category": "server" },
    { "id": 5, "name": "hug", "description": "Hug a member", "arguments": ["member"], "permissions": ["none"], "category": "server" },
    { "id": 5, "name": "emote", "description": "Steal Emote's from other servers.", "arguments": ["emote"], "permissions": ["manage_messages"], "category": "server" },
    { "id": 5, "name": "roleall", "description": "Role everyone in a discord server.", "arguments": ["role"], "permissions": ["manage_roles"], "category": "server" },
    { "id": 5, "name": "whitelistbot", "description": "Whitelist a bot from a image", "arguments": ["bot_ID"], "permissions": ["administrator"], "category": "server" },
    { "id": 5, "name": "giveaway", "description": "List all giveaway commands.", "arguments": ["none"], "permissions": ["manage_messages"], "category": "server" },
    { "id": 5, "name": "giveaway create", "description": "Start A giveaway for your Discord server.", "arguments": ["time","prize"], "permissions": ["manage_messages"], "category": "server" },
    { "id": 5, "name": "giveaway delete", "description": "Delete A giveaway for your Discord server.", "arguments": ["messageID"], "permissions": ["manage_messages"], "category": "server" },
    { "id": 5, "name": "giveaway list", "description": "List all giveaways that are hosted", "arguments": ["none"], "permissions": ["manage_messages"], "category": "server" },
    { "id": 5, "name": "poll", "description": "Create a poll in your server.", "arguments": ["none"], "permissions": ["manage_messages"], "category": "server" },
    { "id": 5, "name": "poll create", "description": "Create a poll in your server.", "arguments": ["question"], "permissions": ["manage_messages"], "category": "server" },
    { "id": 5, "name": "poll delete", "description": "Delete a poll in your server.", "arguments": ["messageid"], "permissions": ["manage_messages"], "category": "server" },
    { "id": 5, "name": "poll list", "description": "List polls in your server.", "arguments": ["none"], "permissions": ["manage_messages"], "category": "server" },
    { "id": 4, "name": "boosterrole share list", "description": "List who you share with.", "arguments": ["none"], "permissions": ["booster"], "category": "server" },
    { "id": 4, "name": "boosterrole share", "description": "Share your role with your friends", "arguments": ["member"], "permissions": ["booster"], "category": "server" },
    { "id": 4, "name": "boosterrole share remove", "description": "Remove a Share your role with your friends", "arguments": ["member"], "permissions": ["booster"], "category": "server" },
    { "id": 4, "name": "boosterrole remove", "description": "Remove Booster role", "arguments": ["member"], "permissions": ["booster"], "category": "server" },
    { "id": 4, "name": "boosterrole color", "description": "Change the color of your booster role.", "arguments": ["new color"], "permissions": ["booster"], "category": "server" },
    { "id": 5, "name": "boosterrole icon", "description": "Change the icon of your booster role.", "arguments": ["new icon"], "permissions": ["booster"], "category": "server" },
    { "id": 6, "name": "boosterrole create", "description": "Create a booster role with a custom name and color.", "arguments": ["name", "color"], "permissions": ["booster"], "category": "server" },
    { "id": 7, "name": "welcome", "description": "Configure the server's welcome system.", "arguments": ["none"], "permissions": ["manage_server"], "category": "server" },
    { "id": 8, "name": "welcome add", "description": "Add a new welcome message or embed for new members.", "arguments": ["channel", "message_or_json"], "permissions": ["manage_server"], "category": "welcome" },
    { "id": 9, "name": "welcome remove", "description": "Remove a specific welcome message by its index.", "arguments": ["channel"], "permissions": ["manage_server"], "category": "welcome" },
    { "id": 10, "name": "welcome clear", "description": "Clear all configured welcome messages.", "arguments": ["none"], "permissions": ["manage_server"], "category": "welcome" },
    { "id": 12, "name": "welcome dm", "description": "Set a custom welcome DM for new members. Use 'none' to disable.", "arguments": ["message_or_json"], "permissions": ["manage_server"], "category": "welcome" },
    { "id": 13, "name": "welcome joinrole", "description": "Assign a role to new members when they join.", "arguments": ["role","remove"], "permissions": ["manage_server"], "category": "welcome" },
    { "id": 14, "name": "welcome view", "description": "View the current welcome message configuration.", "arguments": ["none"], "permissions": ["manage_server"], "category": "welcome" },
    { "id": 15, "name": "autorole", "description": "Configure automatic roles for new members.", "arguments": ["none"], "permissions": ["manage_roles"], "category": "server" },
    { "id": 16, "name": "autorole set", "description": "Add a role to the list of roles automatically assigned to new members.", "arguments": ["role"], "permissions": ["manage_roles"], "category": "autorole" },
    { "id": 17, "name": "autorole remove", "description": "Remove a role from the auto-role list.", "arguments": ["role"], "permissions": ["manage_roles"], "category": "autorole" },
    { "id": 18, "name": "autorole list", "description": "List all roles currently set for auto-assignment.", "arguments": ["none"], "permissions": ["manage_roles"], "category": "autorole" },
    { "id": 19, "name": "autorole clear", "description": "Clear all roles from the auto-role list.", "arguments": ["none"], "permissions": ["manage_roles"], "category": "autorole" },
    { "id": 13, "name": "autoresponder", "description": "Manage automatic responses to user messages.", "arguments": ["none"], "permissions": ["manage_messages"], "category": "utility" },
    { "id": 14, "name": "autoresponder add", "description": "Add a new autoresponder with a trigger and response.", "arguments": ["trigger", "response"], "permissions": ["manage_messages"], "category": "utility" },
    { "id": 15, "name": "autoresponder delete", "description": "Delete an existing autoresponder by trigger word.", "arguments": ["trigger"], "permissions": ["manage_messages"], "category": "utility" },
    { "id": 16, "name": "autoresponder view", "description": "View all configured autoresponders.", "arguments": ["none"], "permissions": ["manage_messages"], "category": "utility" },
    { "id": 17, "name": "autoreaction", "description": "Manage automatic emoji reactions to messages.", "arguments": ["none"], "permissions": ["manage_messages"], "category": "utility" },
    { "id": 18, "name": "autoreaction add", "description": "Add an automatic reaction for a trigger word.", "arguments": ["trigger", "emoji"], "permissions": ["manage_messages"], "category": "utility" },
    { "id": 19, "name": "autoreaction delete", "description": "Remove a trigger and its associated reaction.", "arguments": ["trigger"], "permissions": ["manage_messages"], "category": "utility" },
    { "id": 20, "name": "autoreaction view", "description": "View all configured automatic reactions.", "arguments": ["none"], "permissions": ["manage_messages"], "category": "utility" },
    { "id": 21, "name": "slowmode", "description": "Enable or change slowmode duration in a channel.", "arguments": ["seconds"], "permissions": ["manage_channels"], "category": "utility" },
    { "id": 22, "name": "afk", "description": "Set your AFK status with an optional reason.", "arguments": ["reason"], "permissions": ["none"], "category": "information" },
    { "id": 23, "name": "purge", "description": "Delete a number of messages, optionally from a specific member.", "arguments": ["amount", "member (optional)"], "permissions": ["none"], "category": "utility" },
    { "id": 24, "name": "servername", "description": "Change the server's name.", "arguments": ["name"], "permissions": ["administrator"], "category": "utility" },
    { "id": 25, "name": "timeout", "description": "Temporarily mute a member for a specified time and reason.", "arguments": ["member", "time", "reason"], "permissions": ["administrator"], "category": "moderation" },
    { "id": 26, "name": "jail", "description": "Restrict a member by placing them in a jail role.", "arguments": ["member"], "permissions": ["manage_roles"], "category": "moderation" },
    { "id": 27, "name": "unjail", "description": "Remove a member from the jail role.", "arguments": ["member"], "permissions": ["manage_roles"], "category": "moderation" },
    { "id": 28, "name": "nickname", "description": "Change a member's nickname.", "arguments": ["member", "name"], "permissions": ["manage_nicknames"], "category": "utility" },
    { "id": 29, "name": "resetnick", "description": "Reset a member's nickname to their original username.", "arguments": ["member"], "permissions": ["manage_nicknames"], "category": "utility" },
    { "id": 30, "name": "swapnick", "description": "Swap nicknames between two members.", "arguments": ["member1", "member2"], "permissions": ["manage_nicknames"], "category": "utility" },
    { "id": 31, "name": "reversenick", "description": "Reverse the characters in a member’s nickname.", "arguments": ["member"], "permissions": ["manage_nicknames"], "category": "utility" },
    { "id": 35, "name": "antinuke", "description": "Enable anti-nuke protection and set the log channel.", "arguments": ["toggles"], "permissions": ["administrator"], "category": "antinuke" },
    { "id": 36, "name": "antinuke toggle antimassmention", "description": "Enable or disable anti-massmention protection in a channel. ", "arguments": ["none"], "permissions": ["administrator"], "category": "antinuke" },
    { "id": 36, "name": "antinuke toggle antibotjoin", "description": "Enable or disable bot-join protection in a channel.", "arguments": ["none"], "permissions": ["administrator"], "category": "antinuke" },
    { "id": 36, "name": "antinuke toggle antiinvite", "description": "Enable or disable discord server invite protection in a channel.", "arguments": ["none"], "permissions": ["administrator"], "category": "antinuke" },
    { "id": 36, "name": "antinuke toggle antispam", "description": "Enable or disable discord spam protection in a channel.", "arguments": ["none"], "permissions": ["administrator"], "category": "antinuke" },
    { "id": 36, "name": "antinuke toggle antiwebhookcreate", "description": "Enable or disable webhook protection in a channel.", "arguments": ["none"], "permissions": ["administrator"], "category": "antinuke" },
    { "id": 36, "name": "antinuke toggle antiwebhookspam", "description": "Enable or disable webhook spam protection in a channel.", "arguments": ["none"], "permissions": ["administrator"], "category": "antinuke" },
    { "id": 38, "name": "antinuke whitelist add", "description": "Add a user to protection from anti nuke", "arguments": ["member"], "permissions": ["administrator"], "category": "antinuke" },
    { "id": 38, "name": "antinuke whitelist remove", "description": "Delete a user to protection from anti nuke", "arguments": ["member"], "permissions": ["administrator"], "category": "antinuke" },
    { "id": 38, "name": "antinuke whitelist list", "description": "List users to protection from anti nuke", "arguments": ["channel"], "permissions": ["administrator"], "category": "antinuke" },
    { "id": 36, "name": "antinuke toggle antilink", "description": "Enable or disable anti-link protection in a channel.", "arguments": ["channel"], "permissions": ["administrator"], "category": "antinuke" },
    { "id": 37, "name": "antinuke toggle antiemoji", "description": "Enable or disable anti-emoji spam detection.", "arguments": ["channel"], "permissions": ["administrator"], "category": "antinuke" },
    { "id": 38, "name": "autolog", "description": "View autolog config for Guild", "arguments": ["none"], "permissions": ["administrator"], "category": "autolog" },
    { "id": 38, "name": "autolog set channel", "description": "Set channel for autolog", "arguments": ["channel"], "permissions": ["administrator"], "category": "autolog" },
    { "id": 38, "name": "autolog toggle", "description": "Toggle options for autolog", "arguments": ["option"], "permissions": ["administrator"], "category": "autolog" },
    { "id": 38, "name": "history", "description": "View history on a member", "arguments": ["member"], "permissions": ["none"], "category": "moderation" },
    { "id": 38, "name": "history remove", "description": "Remove a member history", "arguments": ["member"], "permissions": ["administrator"], "category": "moderation" },
    { "id": 38, "name": "history removeall", "description": "Remove all member(s) history", "arguments": ["none"], "permissions": ["administrator"], "category": "moderation" },
    { "id": 38, "name": "staffstrip", "description": "Remove all Staff role's from a member", "arguments": ["member"], "permissions": ["administrator"], "category": "moderation" },
    { "id": 38, "name": "jaillist", "description": "List all members who are jailed", "arguments": ["none"], "permissions": ["none"], "category": "moderation" },
    { "id": 38, "name": "modhistory", "description": "View a mod's actions", "arguments": ["member"], "permissions": ["administrator"], "category": "moderation" },
    { "id": 39, "name": "snipe", "description": "Retrieve the last deleted message or image.", "arguments": ["index"], "permissions": ["none"], "category": "utility" },
    { "id": 39, "name": "editsnipe", "description": "Retrieve the last edited message or image.", "arguments": ["index"], "permissions": ["none"], "category": "utility" },
    { "id": 39, "name": "reactionsnipe", "description": "Retrieve the last deleted reaction.", "arguments": ["index"], "permissions": ["none"], "category": "utility" },
    { "id": 23, "name": "8ball", "description": "Answers a yes/no question.", "arguments": ["question"], "permissions": ["none"], "category": "fun" },
    { "id": 24, "name": "meme", "description": "Fetches a random meme from the internet.", "arguments": ["none"], "permissions": ["none"], "category": "fun" },
    { "id": 25, "name": "joke", "description": "Tells a random joke.", "arguments": ["none"], "permissions": ["none"], "category": "fun" },
    { "id": 26, "name": "fact", "description": "Provides a random fact.", "arguments": ["none"], "permissions": ["none"], "category": "fun" },
    { "id": 27, "name": "wyr", "description": "Asks a random 'Would You Rather' question.", "arguments": ["none"], "permissions": ["none"], "category": "fun" },
    { "id": 28, "name": "truth", "description": "Provides a truth question.", "arguments": ["none"], "permissions": ["none"], "category": "fun" },
    { "id": 29, "name": "dare", "description": "Provides a dare.", "arguments": ["none"], "permissions": ["none"], "category": "fun" },
    { "id": 30, "name": "howgay", "description": "Calculates a member's 'gayness'.", "arguments": ["member"], "permissions": ["none"], "category": "fun" },
    { "id": 31, "name": "ship", "description": "Calculates compatibility between two members and gives a ship name.", "arguments": ["member1", "member2"], "permissions": ["none"], "category": "fun" },
    { "id": 32, "name": "hug", "description": "Sends a hug GIF to a member.", "arguments": ["member"], "permissions": ["none"], "category": "fun" },
    { "id": 33, "name": "pat", "description": "Sends a pat GIF to a member.", "arguments": ["member"], "permissions": ["none"], "category": "fun" },
    { "id": 34, "name": "slap", "description": "Sends a slap GIF to a member.", "arguments": ["member"], "permissions": ["none"], "category": "fun" },
    { "id": 35, "name": "kiss", "description": "Sends a kiss GIF to a member.", "arguments": ["member"], "permissions": ["none"], "category": "fun" },
    { "id": 36, "name": "cuddle", "description": "Sends a cuddle GIF to a member.", "arguments": ["member"], "permissions": ["none"], "category": "fun" },
    { "id": 37, "name": "punch", "description": "Sends a punch GIF to a member.", "arguments": ["member"], "permissions": ["none"], "category": "fun" },
    { "id": 38, "name": "lick", "description": "Sends a lick GIF to a member.", "arguments": ["member"], "permissions": ["none"], "category": "fun" },
    { "id": 39, "name": "feed", "description": "Sends a feed GIF to a member.", "arguments": ["member"], "permissions": ["none"], "category": "fun" },
    { "id": 40, "name": "f", "description": "Pay respects to a member or thing. Also has an alias `respects`.", "arguments": ["text"], "permissions": ["none"], "category": "fun" },
    { "id": 41, "name": "ascii", "description": "Converts text to ASCII art.", "arguments": ["text"], "permissions": ["none"], "category": "fun" },
    { "id": 42, "name": "reverse", "description": "Reverses the provided text.", "arguments": ["text"], "permissions": ["none"], "category": "fun" },
    { "id": 43, "name": "emojify", "description": "Converts text into regional indicator emojis.", "arguments": ["text"], "permissions": ["none"], "category": "fun" },
    { "id": 44, "name": "bigtext", "description": "Converts text into large, 'big' text using emojis.", "arguments": ["text"], "permissions": ["none"], "category": "fun" },
    { "id": 45, "name": "owo", "description": "Owo-fies the provided text.", "arguments": ["text"], "permissions": ["none"], "category": "fun" },
    { "id": 46, "name": "clap", "description": "Adds clapping hands emojis between each word.", "arguments": ["text"], "permissions": ["none"], "category": "fun" },
    { "id": 47, "name": "say", "description": "Makes the bot say something and deletes your command message.", "arguments": ["text"], "permissions": ["manage_messages"], "category": "fun" },
    { "id": 48, "name": "echo", "description": "Makes the bot repeat your message.", "arguments": ["text"], "permissions": ["none"], "category": "fun" },
    { "id": 49, "name": "cat", "description": "Fetches a random cat image.", "arguments": ["none"], "permissions": ["none"], "category": "fun" },
    { "id": 50, "name": "dog", "description": "Fetches a random dog image.", "arguments": ["none"], "permissions": ["none"], "category": "fun" },
    { "id": 51, "name": "inspire", "description": "Fetches a random inspirational quote.", "arguments": ["none"], "permissions": ["none"], "category": "fun" },
    { "id": 52, "name": "qotd", "description": "Fetches the quote of the day.", "arguments": ["none"], "permissions": ["none"], "category": "fun" },
    { "id": 53, "name": "urban", "description": "Searches Urban Dictionary for a word's definition.", "arguments": ["word"], "permissions": ["none"], "category": "fun" },
    { "id": 54, "name": "copypasta", "description": "Fetches a random copypasta from Reddit.", "arguments": ["none"], "permissions": ["none"], "category": "fun" },
    { "id": 55, "name": "dadjoke", "description": "Tells a random dad joke.", "arguments": ["none"], "permissions": ["none"], "category": "fun" },
    { "id": 56, "name": "chucknorris", "description": "Fetches a random Chuck Norris joke.", "arguments": ["none"], "permissions": ["none"], "category": "fun" },
    { "id": 57, "name": "catfact", "description": "Provides a random fact about cats.", "arguments": ["none"], "permissions": ["none"], "category": "fun" },
    { "id": 58, "name": "dogfact", "description": "Provides a random fact about dogs.", "arguments": ["none"], "permissions": ["none"], "category": "fun" },
    { "id": 40, "name": "clearsnipe", "description": "Clear all sniped messages or images.", "arguments": ["none"], "permissions": ["manage_messages"], "category": "utility" },
    { "id": 41, "name": "crypto", "description": "Check the current price of a cryptocurrency.", "arguments": ["crypto"], "permissions": ["manage_messages"], "category": "information" },
    { "id": 42, "name": "lock", "description": "Lock a channel to prevent members from sending messages.", "arguments": ["none"], "permissions": ["manage_channels"], "category": "moderation" },
    { "id": 43, "name": "unlock", "description": "Unlock a channel to allow messages again.", "arguments": ["none"], "permissions": ["manage_channels"], "category": "moderation" },
    { "id": 44, "name": "createrole", "description": "Create a new role in the server.", "arguments": ["role_name"], "permissions": ["manage_roles"], "category": "utility" },
    { "id": 45, "name": "deleterole", "description": "Delete a role from the server.", "arguments": ["role_name"], "permissions": ["manage_roles"], "category": "utility" },
    { "id": 46, "name": "roleinfo", "description": "Get detailed information about a specific role.", "arguments": ["role_name"], "permissions": ["manage_roles"], "category": "utility" },
    { "id": 47, "name": "role", "description": "Assign a role to a member.", "arguments": ["member", "role_name"], "permissions": ["manage_roles"], "category": "utility" },
    { "id": 48, "name": "kick", "description": "Remove a member from the server.", "arguments": ["user", "reason (optional)"], "permissions": ["Kick_Members"], "category": "moderation" },
    { "id": 49, "name": "ban", "description": "Permanently ban a user from the server.", "arguments": ["user", "reason (optional)"], "permissions": ["Ban_Members"], "category": "moderation" },
    { "id": 50, "name": "unban", "description": "Unban a previously banned user.", "arguments": ["user", "reason (optional)"], "permissions": ["Ban_Members"], "category": "moderation" },
    { "id": 51, "name": "userinfo", "description": "Show detailed information about a user.", "arguments": ["user (optional)"], "permissions": ["none"], "category": "information" },
    { "id": 52, "name": "remind", "description": "Set a reminder for yourself.", "arguments": ["time", "reason"], "permissions": ["none"], "category": "information" },
    { "id": 53, "name": "remind set", "description": "Create a new reminder with time and reason.", "arguments": ["time", "reason"], "permissions": ["none"], "category": "information" },
    { "id": 54, "name": "remind list", "description": "View all your active reminders.", "arguments": ["none"], "permissions": ["none"], "category": "information" },
    { "id": 25, "name": "untimeout", "description": "Unmute a member for a specified time and reason.", "arguments": ["member", "time", "reason"], "permissions": ["administrator"], "category": "moderation" },
    { "id": 55, "name": "remind delete", "description": "Delete a specific reminder using its ID.", "arguments": ["id"], "permissions": ["none"], "category": "information" },
    { "id": 56, "name": "instagram", "description": "Get public profile information from Instagram.", "arguments": ["name"], "permissions": ["none"], "category": "information" },
    { "id": 57, "name": "tiktok", "description": "Get public profile information from TikTok.", "arguments": ["name"], "permissions": ["none"], "category": "information" },
    { "id": 58, "name": "roblox", "description": "Get public profile information from Roblox.", "arguments": ["name"], "permissions": ["none"], "category": "information" },
    { "id": 59, "name": "twitter", "description": "Get public profile information from Twitter.", "arguments": ["name"], "permissions": ["none"], "category": "information" },
    { "id": 60, "name": "membercount", "description": "Display the total number of server members.", "arguments": ["none"], "permissions": ["none"], "category": "information" },
    { "id": 61, "name": "boostcount", "description": "Show how many boosts the server has.", "arguments": ["none"], "permissions": ["none"], "category": "information" },
    { "id": 61, "name": "roleplay", "description": "Toggle roleplay on or off using arg", "arguments": ["on","off"], "permissions": ["administrator"], "category": "fun" },
    { "id": 61, "name": "kiss", "description": "Kiss a member.", "arguments": ["member"], "permissions": ["none"], "category": "fun" },
    { "id": 61, "name": "hug", "description": "Hug a member.", "arguments": ["member"], "permissions": ["none"], "category": "fun" },
    { "id": 61, "name": "facepalm", "description": "facepalm a member.", "arguments": ["member"], "permissions": ["none"], "category": "fun" },
    { "id": 61, "name": "cuddle", "description": "cuddle a member.", "arguments": ["member"], "permissions": ["none"], "category": "fun" },
    { "id": 61, "name": "shoot", "description": "shoot a member.", "arguments": ["member"], "permissions": ["none"], "category": "fun" },
    { "id": 61, "name": "tickle", "description": "tickle a member.", "arguments": ["member"], "permissions": ["none"], "category": "fun" },
    { "id": 61, "name": "bite", "description": "bite a member.", "arguments": ["member"], "permissions": ["none"], "category": "fun" },
    { "id": 61, "name": "banner", "description": "Get a member's banner.", "arguments": ["member"], "permissions": ["none"], "category": "information" },
    { "id": 61, "name": "servericon", "description": "Get server icon", "arguments": ["none"], "permissions": ["none"], "category": "server" },
    { "id": 61, "name": "serverbanner", "description": "Get server banner", "arguments": ["none"], "permissions": ["none"], "category": "server" },
    { "id": 61, "name": "splash", "description": "Get server splash", "arguments": ["none"], "permissions": ["none"], "category": "server" },
    { "id": 61, "name": "setsplash", "description": "set a server splash", "arguments": ["image"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 61, "name": "setbanner", "description": "set a server banner", "arguments": ["image"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 61, "name": "seticon", "description": "set a server icon", "arguments": ["image"], "permissions": ["manage_guild"], "category": "server" },
    { "id": 61, "name": "firstmessage", "description": "jump to firstmessage", "arguments": ["channel"], "permissions": ["none"], "category": "server" },
    { "id": 61, "name": "webhooks", "description": "list all webhooks in guild", "arguments": ["none"], "permissions": ["manage_webhooks"], "category": "server" },
    { "id": 62, "name": "prefix self", "description": "A special command to change your personal prefix.", "arguments": ["prefix"], "permissions": ["none"], "category": "utility" },
    { "id": 59, "name": "play", "description": "Plays a song from a URL or searches for one.", "arguments": ["URL/query"], "permissions": ["none"], "category": "music" },
    { "id": 60, "name": "pause", "description": "Pauses the current song.", "arguments": ["none"], "permissions": ["none"], "category": "music" },
    { "id": 61, "name": "resume", "description": "Resumes the paused song.", "arguments": ["none"], "permissions": ["none"], "category": "music" },
    { "id": 62, "name": "skip", "description": "Skips the current song.", "arguments": ["none"], "permissions": ["none"], "category": "music" },
    { "id": 63, "name": "stop", "description": "Stops the music and clears the queue.", "arguments": ["none"], "permissions": ["none"], "category": "music" },
    { "id": 64, "name": "queue", "description": "Displays the current song queue.", "arguments": ["none"], "permissions": ["none"], "category": "music" },
    { "id": 65, "name": "volume", "description": "Sets the playback volume.", "arguments": ["level"], "permissions": ["none"], "category": "music" },
    { "id": 66, "name": "nowplaying", "description": "Shows the currently playing song.", "arguments": ["none"], "permissions": ["none"], "category": "music" },
    { "id": 67, "name": "loop", "description": "Toggles looping for the current song.", "arguments": ["none"], "permissions": ["none"], "category": "music" },
    { "id": 68, "name": "loopqueue", "description": "Toggles looping for the entire queue.", "arguments": ["none"], "permissions": ["none"], "category": "music" },
    { "id": 69, "name": "shuffle", "description": "Shuffles the queue.", "arguments": ["none"], "permissions": ["none"], "category": "music" },
    { "id": 70, "name": "remove", "description": "Removes a song from the queue by its index.", "arguments": ["index"], "permissions": ["none"], "category": "music" },
    { "id": 71, "name": "clearqueue", "description": "Clears the entire queue.", "arguments": ["none"], "permissions": ["none"], "category": "music" },
    { "id": 72, "name": "leave", "description": "Makes the bot leave the voice channel.", "arguments": ["none"], "permissions": ["none"], "category": "music" },
    { "id": 73, "name": "join", "description": "Makes the bot join your voice channel.", "arguments": ["none"], "permissions": ["none"], "category": "music" },
    { "id": 74, "name": "search", "description": "Searches for songs and lets you select.", "arguments": ["query"], "permissions": ["none"], "category": "music" },
    { "id": 75, "name": "lyrics", "description": "Fetches lyrics for a song.", "arguments": ["song title"], "permissions": ["none"], "category": "music" },
    { "id": 76, "name": "playlist create", "description": "Creates a new playlist.", "arguments": ["name"], "permissions": ["none"], "category": "music" },
    { "id": 77, "name": "playlist add", "description": "Adds a song to a playlist.", "arguments": ["name", "URL/query"], "permissions": ["none"], "category": "music" },
    { "id": 78, "name": "playlist remove", "description": "Removes a song from a playlist.", "arguments": ["name", "index"], "permissions": ["none"], "category": "music" },
    { "id": 79, "name": "playlist play", "description": "Plays a saved playlist.", "arguments": ["name"], "permissions": ["none"], "category": "music" },
    { "id": 80, "name": "playlist list", "description": "Lists your saved playlists.", "arguments": ["none"], "permissions": ["none"], "category": "music" },
    { "id": 81, "name": "playlist delete", "description": "Deletes a playlist.", "arguments": ["name"], "permissions": ["none"], "category": "music" }
];


// Preloader functionality (no changes here)
const preloader = document.getElementById('preloader');
const mainContent = document.getElementById('main-content');
const typingTextElement = document.querySelector('.typing-text');
const botName = "Leech";

function typeWriter(text, i, callback) {
    if (i < text.length) {
        typingTextElement.textContent += text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1, callback), 150);
    } else {
        if (callback) {
            setTimeout(callback, 1000);
        }
    }
}

// Mobile navigation toggle (updated)
const hamburger = document.querySelector('.hamburger');
const headerBar = document.querySelector('.header-center-bar');

hamburger.addEventListener('click', () => {
    headerBar.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// New function to hide the mobile menu
function hideMobileMenu() {
    headerBar.classList.remove('active');
    hamburger.classList.remove('active');
}

// Command List Generation and Filtering (no changes here)
const commandListContainer = document.getElementById('command-list-container');
const tabButtons = document.querySelectorAll('.tab-button');
const commandsTabsContainer = document.querySelector('.commands-tabs-container');
const searchInput = document.getElementById('search-input');


let activeCategory = 'all';

// Count commands for each category (no changes here)
const commandCounts = {};
commandsData.forEach(cmd => {
    commandCounts[cmd.category] = (commandCounts[cmd.category] || 0) + 1;
});
commandCounts['all'] = commandsData.length;


function renderCommands(filterCategory = 'all', searchTerm = '') {
    commandListContainer.innerHTML = '';
    let filteredCommands = commandsData;

    if (filterCategory !== 'all') {
        filteredCommands = filteredCommands.filter(cmd => cmd.category === filterCategory);
    }

    if (searchTerm) {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        filteredCommands = filteredCommands.filter(cmd =>
            cmd.name.toLowerCase().includes(lowerCaseSearchTerm) ||
            cmd.description.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }

    filteredCommands.sort((a, b) => a.name.localeCompare(b.name));

    if (filteredCommands.length === 0) {
        commandListContainer.innerHTML = '<p class="no-results-text">No commands found.</p>';
        return;
    }

    filteredCommands.forEach(command => {
        const commandCard = document.createElement('div');
        commandCard.classList.add('command-card');

        const args = command.arguments.length > 0 ? command.arguments.map(arg => `<span class="detail-item">${arg}</span>`).join('') : '<span class="detail-item">none</span>';
        const perms = command.permissions.length > 0 ? command.permissions.map(perm => `<span class="detail-item permission">${perm}</span>`).join('') : '<span class="detail-item permission">none</span>';

        commandCard.innerHTML = `
            <button class="copy-btn" onclick="copyCommand('${command.name}')"><i class="fas fa-copy"></i></button>
            <p class="command-name">,<span>${command.name}</span></p>
            <p class="command-description">${command.description}</p>
            <div class="command-details">
                <div class="detail-group">
                    <span class="detail-label">arguments</span> ${args}
                </div>
                <div class="detail-group">
                    <span class="detail-label">permissions</span> ${perms}
                </div>
            </div>
        `;
        commandCard.setAttribute('data-command-name', command.name);
        commandListContainer.appendChild(commandCard);
    });

    document.querySelectorAll('.copy-btn').forEach(icon => {
        icon.addEventListener('click', (event) => {
            const commandToCopy = event.currentTarget.parentNode.querySelector('.command-name span').textContent;
            navigator.clipboard.writeText(`,${commandToCopy}`).then(() => {
                const iconElement = event.currentTarget.querySelector('i');
                iconElement.classList.remove('fa-copy');
                iconElement.classList.add('fa-check');
                iconElement.style.color = '#28a745';
                iconElement.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    iconElement.classList.remove('fa-check');
                    iconElement.classList.add('fa-copy');
                    iconElement.style.color = 'var(--secondary-text-color)';
                    iconElement.style.transform = 'scale(1)';
                }, 1500);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    });
}

function scrollToCenter(element) {
    const container = commandsTabsContainer;
    const containerWidth = container.offsetWidth;
    const elementWidth = element.offsetWidth;
    const elementOffset = element.offsetLeft;

    const centerPosition = elementOffset - (containerWidth / 2) + (elementWidth / 2);

    container.scrollTo({
        left: centerPosition,
        behavior: 'smooth'
    });
}

// New animated counters for stats (no changes here)
const userCountTarget = 3000;
const serverCountTarget = 40;

function animateCountUp(element, target, prefix = '') {
    let current = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));

    const interval = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = prefix + target.toLocaleString() + "+";
            clearInterval(interval);
        } else {
            element.textContent = prefix + current.toLocaleString() + "+";
        }
    }, 16);
}

// Interactivity logic combined
document.addEventListener('DOMContentLoaded', () => {
    // Preloader (no changes here)
    typeWriter(botName, 0, () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            mainContent.classList.remove('hidden');
        }, 500);
    });

    // Initialize command counts
    document.querySelectorAll('.commands-tabs .command-count').forEach(span => {
        const category = span.parentElement.dataset.category;
        span.textContent = commandCounts[category] || 0;
    });

    // **UPDATED:** Set initial active tab and render commands
    // This ensures commands are visible on page load, not just after clicking a tab.
    const initialActiveTab = document.querySelector('.tab-button[data-category="server"]');
    if (initialActiveTab) {
        initialActiveTab.classList.add('active');
        activeCategory = 'server';
        renderCommands(activeCategory, '');
    } else {
        renderCommands('all', '');
    }

    // Event listeners for category pills and search
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            activeCategory = category;
            renderCommands(activeCategory, searchInput.value);
            scrollToCenter(button);
        });
    });

    searchInput.addEventListener('input', (e) => {
        renderCommands(activeCategory, e.target.value);
    });

    // Star animation (no changes here)
    const starContainer = document.createElement('div');
    starContainer.id = 'star-container';
    document.body.appendChild(starContainer);

    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        createStar(starContainer);
    }

    function createStar(container) {
        const star = document.createElement('div');
        star.classList.add('star');

        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;

        const animationDuration = Math.random() * 3 + 2;
        const animationDelay = Math.random() * 5;
        star.style.animationDuration = `${animationDuration}s`;
        star.style.animationDelay = `${animationDelay}s`;

        container.appendChild(star);

        setTimeout(() => {
            star.remove();
            createStar(container);
        }, (animationDuration + animationDelay) * 1000 + Math.random() * 5000);
    }

    // Animate on scroll logic (no changes here)
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');

                // Animate counters if the stats banner is visible
                if (entry.target.id === 'stats-banner') {
                    const userCountEl = document.getElementById('animated-user-count');
                    const serverCountEl = document.getElementById('animated-server-count');

                    if (userCountEl && !userCountEl.classList.contains('counted')) {
                        animateCountUp(userCountEl, 3000, '');
                        userCountEl.classList.add('counted');
                    }
                    if (serverCountEl && !serverCountEl.classList.contains('counted')) {
                        animateCountUp(serverCountEl, 40, '');
                        serverCountEl.classList.add('counted');
                    }
                }

                if (entry.target.id !== 'modules-carousel') {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(section => {
        observer.observe(section);
    });

    // Drag-to-scroll functionality for command tabs (no changes here)
    let isDown = false;
    let startX;
    let scrollLeft;

    commandsTabsContainer.addEventListener('mousedown', (e) => {
        const isClickingTab = e.target.closest('.tab-button');
        if (isClickingTab) return;  

        isDown = true;
        commandsTabsContainer.classList.add('is-dragging');
        startX = e.pageX - commandsTabsContainer.offsetLeft;
        scrollLeft = commandsTabsContainer.scrollLeft;
    });

    commandsTabsContainer.addEventListener('mouseleave', () => {
        isDown = false;
        commandsTabsContainer.classList.remove('is-dragging');
    });

    commandsTabsContainer.addEventListener('mouseup', () => {
        isDown = false;
        commandsTabsContainer.classList.remove('is-dragging');
    });

    commandsTabsContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - commandsTabsContainer.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        commandsTabsContainer.scrollLeft = scrollLeft - walk;
    });
});
// New function to handle custom routing and scrolling
function hideMobileMenu(event) {
    const mobileMenu = document.querySelector('.header-center-bar');
    const hamburger = document.querySelector('.hamburger');

    mobileMenu.classList.remove('active');
    hamburger.classList.remove('active');

    // Prevent default anchor behavior
    if (event) {
        event.preventDefault();
        
        const targetElement = event.target.closest('a');
        if (targetElement) {
            const path = targetElement.dataset.path;
            const targetId = targetElement.getAttribute('href').substring(1);
            const section = document.getElementById(targetId);

            if (section) {
                // Update the URL without reloading the page
                window.history.pushState({}, '', path);

                // Manually scroll to the section
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    }
}


















