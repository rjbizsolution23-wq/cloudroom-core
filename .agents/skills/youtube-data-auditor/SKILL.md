---
name: youtube-data-auditor
description: "Validates YouTube channel identity, uploads, newest videos, metadata, statistics, API behavior, public/private data boundaries and data completeness."
---

# YOUTUBE DATA AUDITOR

Establish accurate channel data.

For newest uploads, prefer the channel uploads playlist when available. Do not rely solely on generic search ordering.

Validate:
- CHANNEL ID
- UPLOADS PLAYLIST
- VIDEO IDS
- PUBLISHED DATES
- STATISTICS
- DURATION
- VIDEO TYPE
- DATA COMPLETENESS

Separate:
- PUBLIC
- AUTHORIZED
- INFERRED
- UNKNOWN

Update:
- `.youtube-empire/CHANNEL_DATA.md`
- `.youtube-empire/NEWEST_VIDEOS.md`
- `.youtube-empire/VIDEO_DATABASE.md`

Never fabricate private metrics. Clearly label what is public vs estimated.
