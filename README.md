# marola-platform

E-commerce + retail platform powering Marola's online stores (EE & LV),
wholesale channel, and 5 retail POS terminals.

## Architecture

See the live "how it works" diagram with per-commit decision history:
**https://app.useclew.dev** (powered by Clew)

## Stack

- **Compute:** GCP (Cloud Run)
- **Database:** Supabase (Postgres)
- **Async messaging:** Confluent Kafka
- **CRM:** HubSpot
- **Accounting:** Merit (EE)
- **Payments:** Stripe Connect
- **WMS:** Easyship

## Channels

- woo-1 — WooCommerce B2C (EE)
- woo-2 — WooCommerce B2C (LV)
- magento — wholesale
- pos-fleet — 5 retail POS terminals
