---
title: '업데이트'
date: '2023-03-01'
categories:
  - 'sveltekit'
  - 'markdown'
  - 'svelte'
coverImage: '/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg'
coverWidth: 16
coverHeight: 9
excerpt: 블로그 업데이트 내역!
indexed: true
exposed: true
---

### 2023-02-26

<script>
	import Highlight from '$lib/components/Highlight.svelte';
  	import CodeBlockWrapper from '$lib/components/CodeBlockWrapper.svelte';
</script>

- <Highlight color="red">Text</Highlight>
  <Highlight color="blue">Highlighting</Highlight>
  <Highlight color="green">using</Highlight>
  <Highlight color="yellow">Mdsvex!</Highlight>
- add [sitemap.xml](/api/sitemap.xml)

<br>

### 2023-02-28

- Add **dark mode**
- Changed blog layout

### 2023-03-01

- Changed blog layout
- > Add blockquote design
- | Add |        | Table |
  | --- | ------ | ----- |
  |     | Design |       |

### 2023-06-21

- Migrate to Typescript

### 2023-06-26

- Add `indexed` tag to decide whether to include in sitemap.xml

### 2023-07-08

- Add `exposed` tag to decide whether to include in the post list

### 2023-07-16

- Add `CodeBlockWrapper`

<CodeBlockWrapper>

```go
package chapter4

import (
	"context"
	"errors"
	"fmt"

	"github.com/PacktPublishing/Domain-Driven-Design-with-GoLang/chapter2"
)

type accountKey = int

const accountCtxKey = accountKey(1)

type BookingDomainService interface {
	CreateBooking(ctx context.Context, booking Booking) error
}

type BookingAppService struct {
	bookingRepo          BookingRepository
	bookingDomainService BookingDomainService
}

func NewBookingAppService(bookingRepo BookingRepository, bookingDomainService BookingDomainService) *BookingAppService {
	return &BookingAppService{bookingRepo: bookingRepo, bookingDomainService: bookingDomainService}
}

func (b *BookingAppService) CreateBooking(ctx context.Context, booking Booking) error {
	u, ok := ctx.Value(accountCtxKey).(*chapter2.Customer)
	if !ok {
		return errors.New("invalid customer")
	}

	if u.UserID() != booking.userID.String() {
		return errors.New("cannot create booking for other users")
	}

	if err := b.bookingDomainService.CreateBooking(ctx, booking); err != nil {
		return fmt.Errorf("could not create booking: %w", err)
	}

	if err := b.bookingRepo.SaveBooking(ctx, booking); err != nil {
		return fmt.Errorf("could not save booking: %w", err)
	}

	return nil
}
```

</CodeBlockWrapper>
