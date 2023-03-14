"use client";

import { useState } from "react";

import Link from "next/link";

import { atreaLocationData } from "@/utils/locations/atrea/consts";

export default function Page() {
  const [currentLocation, setCurrentLocation] = useState<string>("");

  return (
    <main className="flex h-full flex-col bg-black bg-opacity-70">
      <section className="relative z-10 flex grow items-center justify-center overflow-hidden">
        <div className="overflow-auto">
          <svg
            width="566"
            height="600"
            viewBox="-40 -60 650 680"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image
              href="/images/elyos.png"
              width="212"
              height="216"
              x="400"
              y="400"
              className={` transition-opacity duration-150 ease-in-out ${
                currentLocation === "elysea" ? "opacity-1" : "opacity-25"
              }`}
            />

            <image
              href="/images/asmodian.png"
              width="212"
              height="216"
              x="-40"
              y="-60"
              onMouseEnter={() => setCurrentLocation("asmodian")}
              onMouseLeave={() => setCurrentLocation("")}
              className={` transition-opacity duration-150 ease-in-out ${
                currentLocation === "asmodae" ? "opacity-1" : "opacity-25"
              }`}
            />
            <image
              href="/images/atrea/atrea.png"
              width="566"
              height="600"
              x="0"
              y="0"
            />
            {atreaLocationData.map((location, index) => (
              <image
                key={index}
                href={`/images/atrea/${location.name}.png`}
                width={location.width}
                height={location.height}
                x={location.x}
                y={location.y}
                className={`transition-opacity duration-150 ease-in-out ${
                  currentLocation === location.name ? "opacity-1" : "opacity-0"
                }`}
              />
            ))}

            {atreaLocationData.map((location, index) => (
              <Link
                key={index}
                href={`/${location.name}`}
                onMouseEnter={() => setCurrentLocation(location.name)}
                onMouseLeave={() => setCurrentLocation("")}
              >
                <path
                  className="fill-transparent stroke-transparent"
                  d={location.svgPath}
                ></path>
                <text
                  key={index}
                  x={location.textX}
                  y={location.textY}
                  className="fill-[#f4f7ad] text-xl font-bold shadow-black drop-shadow-lg"
                >
                  {location.textName}
                </text>
              </Link>
            ))}

            <Link
              href="/elysea"
              onMouseEnter={() => setCurrentLocation("elysea")}
              onMouseLeave={() => setCurrentLocation("")}
            >
              <path
                className="fill-transparent stroke-transparent"
                d="M 507 617 L 502 603 L 495 598 L 489 614 L 463 610 L 463 596 L 475 589 L 466 585 L 462 572 L 449 571 L 438 565 L 428 554 L 419 549 L 418 546 L 423 545 L 419 538 L 410 535 L 410 533 L 415 530 L 420 531 L 418 527 L 412 522 L 399 519 L 399 516 L 405 512 L 413 513 L 407 506 L 410 504 L 419 508 L 421 505 L 429 507 L 434 511 L 438 520 L 437 524 L 444 525 L 442 514 L 447 514 L 448 505 L 444 497 L 435 488 L 436 478 L 435 465 L 440 467 L 453 475 L 456 479 L 458 479 L 455 473 L 447 465 L 437 459 L 432 453 L 430 446 L 432 445 L 439 450 L 450 452 L 458 456 L 459 454 L 467 459 L 469 455 L 472 444 L 480 442 L 487 444 L 499 442 L 498 425 L 494 417 L 488 411 L 492 405 L 500 399 L 514 399 L 525 409 L 523 414 L 518 418 L 515 427 L 515 441 L 526 444 L 534 442 L 542 445 L 542 452 L 547 458 L 553 454 L 555 457 L 564 452 L 573 450 L 580 445 L 582 447 L 578 457 L 562 467 L 555 476 L 555 480 L 562 472 L 572 468 L 577 464 L 579 468 L 577 482 L 575 484 L 579 486 L 576 492 L 568 497 L 568 500 L 565 506 L 565 515 L 570 513 L 571 515 L 569 521 L 568 525 L 572 526 L 574 523 L 576 522 L 578 512 L 586 506 L 592 506 L 592 509 L 603 505 L 605 506 L 597 514 L 607 513 L 613 516 L 613 518 L 605 520 L 597 525 L 593 531 L 600 531 L 605 534 L 595 537 L 588 546 L 596 547 L 590 551 L 586 553 L 570 568 L 565 570 L 556 571 L 552 571 L 550 571 L 549 579 L 544 586 L 535 588 L 540 591 L 549 596 L 550 602 L 549 609 L 542 611 L 535 610 L 531 610 L 528 610 L 525 614 L 523 610 L 520 602 L 522 596 L 518 596 L 511 602 L 509 610 L 507 617"
              ></path>
            </Link>

            <Link
              href="/asmodae"
              onMouseEnter={() => setCurrentLocation("asmodae")}
              onMouseLeave={() => setCurrentLocation("")}
            >
              <path
                className="fill-transparent stroke-transparent"
                d="M 66 159 L 47 136 L 48 98 L 28 88 L -10 113 L -12 111 L 10 76 L -2 63 L -2 3 L 12 -7 L -12 -42 L -9 -45 L 26 -20 L 29 -42 L 65 -63 L 103 -44 L 107 -21 L 141 -44 L 143 -39 L 122 -7 L 135 2 L 135 61 L 121 74 L 143 109 L 140 112 L 106 88 L 85 98 L 85 136 L 66 159"
              ></path>
            </Link>
          </svg>
        </div>
      </section>
    </main>
  );
}
