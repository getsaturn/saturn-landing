'use client'

import { getDemoInsurer } from '@/lib/demo-data'
import { MessageSquare, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

// Floating decorative elements - 5 elements, zigzag pattern
// Positions use CSS variables for responsive behavior:
// --float-left-offset and --float-right-offset change at different breakpoints
const floatingElements = [
  {
    id: 'policy-green',
    type: 'pdf',
    label: 'Policy_4782_Certificate',
    color: 'green',
    progress: { current: 5, total: 5, label: 'Checks' },
    position: { x: 'var(--float-right-offset)', y: '5%' },
    rotation: 4,
    scale: 1,
    opacity: 1,
    animationDelay: '0s',
    animationDuration: '8s',
  },
  {
    id: 'policy-pink',
    type: 'pdf',
    label: 'Policy_123123',
    color: 'pink',
    progress: { current: 3, total: 5, label: 'Compliant' },
    position: { x: 'var(--float-left-offset)', y: '10%' },
    rotation: -3,
    scale: 0.94,
    opacity: 0.95,
    animationDelay: '0.8s',
    animationDuration: '7s',
  },
  {
    id: 'phone',
    type: 'phone',
    label: 'Called Broker',
    color: 'sky',
    progress: { current: 1, total: 3, label: 'Calls' },
    position: { x: 'calc(var(--float-right-offset) + 2%)', y: '20%' },
    rotation: -3,
    scale: 0.92,
    opacity: 0.95,
    animationDelay: '1.5s',
    animationDuration: '7s',
  },
  {
    id: 'sms',
    type: 'sms',
    label: 'SMS Reminder',
    color: 'purple',
    progress: { current: 4, total: 4, label: 'Delivered' },
    position: { x: 'calc(var(--float-left-offset) - 2%)', y: '24%' },
    rotation: 3,
    scale: 0.88,
    opacity: 0.9,
    animationDelay: '2.2s',
    animationDuration: '6.5s',
  },
  {
    id: 'email',
    type: 'email',
    label: 'alex@pinnacle.com',
    color: 'blue',
    progress: { current: 2, total: 3, label: 'Sent' },
    position: { x: 'calc(var(--float-right-offset) + 4%)', y: '34%' },
    rotation: 2,
    scale: 0.86,
    opacity: 0.88,
    animationDelay: '3s',
    animationDuration: '6s',
  },
]

const colorConfig = {
  pink: {
    border: 'border-pink-200/80',
    bg: 'bg-gradient-to-br from-pink-50 to-white',
    badge: 'bg-pink-600',
    dot: 'bg-pink-500',
    dotEmpty: 'bg-pink-200',
  },
  green: {
    border: 'border-emerald-200/80',
    bg: 'bg-gradient-to-br from-emerald-50 to-white',
    badge: 'bg-emerald-600',
    dot: 'bg-emerald-500',
    dotEmpty: 'bg-emerald-200',
  },
  blue: {
    border: 'border-blue-200/80',
    bg: 'bg-gradient-to-br from-blue-50 to-white',
    badge: 'bg-blue-600',
    dot: 'bg-blue-500',
    dotEmpty: 'bg-blue-200',
  },
  sky: {
    border: 'border-sky-200/80',
    bg: 'bg-gradient-to-br from-sky-50 to-white',
    badge: 'bg-sky-600',
    dot: 'bg-sky-500',
    dotEmpty: 'bg-sky-200',
  },
  purple: {
    border: 'border-violet-200/80',
    bg: 'bg-gradient-to-br from-violet-50 to-white',
    badge: 'bg-violet-600',
    dot: 'bg-violet-500',
    dotEmpty: 'bg-violet-200',
  },
}

const features = [
  {
    name: 'Implementation & Integration',
    description:
      'Drop-in APIs and webhooks connect Saturn to your LOS, servicing, and CRM in hours. We read and write back to your systems of record.',
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3l3 3m-3-3L7 6m6 4H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2v-6a2 2 0 00-2-2z"
          />
        </svg>
      </div>
    ),
  },
  {
    name: 'Smart Document Ingestion',
    description:
      'Ingest ACORDs, binders, endorsements, and certificates from email, portals, and uploads. Normalize, extract, and route automatically.',
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
    ),
  },
  {
    name: 'Accuracy & Validation',
    description:
      'Validate limits, clauses, dates, names, locations, interests, and endorsements against your rules for high confidence results.',
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600">
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    ),
  },
  {
    name: 'Automated Outreach & Communication',
    description:
      'AI orchestrates email, SMS, and voice with brokers and borrowers, tracks replies, and follows up until fully compliant.',
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-600">
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </div>
    ),
  },
  {
    name: 'Compliance Tracking',
    description:
      'See each loan’s required coverages, dates, and status with alerts and exception workflows across your portfolio.',
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      </div>
    ),
  },
  {
    name: 'Write‑Back & Audit',
    description:
      'When compliance is achieved, Saturn updates your existing systems and maintains a complete, exportable audit trail.',
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-600">
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      </div>
    ),
  },
]

// Circular progress indicator for floating elements
function CircularProgress({
  value,
  max,
  colorClass,
  emptyColorClass,
}: {
  value: number
  max: number
  colorClass: string
  emptyColorClass: string
}) {
  const percentage = (value / max) * 100
  const size = 20
  const strokeWidth = 6
  const radius = (36 - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  return (
    <div className="relative" style={{ height: size, width: size }}>
      <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
        {/* Background circle */}
        <circle
          className={emptyColorClass}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          cx="18"
          cy="18"
          r={radius}
        />
        {/* Progress circle */}
        <circle
          className={colorClass}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          cx="18"
          cy="18"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (percentage / 100) * circumference}
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

function FloatingElement({ element }: { element: (typeof floatingElements)[0] }) {
  const colors = colorConfig[element.color as keyof typeof colorConfig]

  // Map color config to text classes for the circular progress
  const progressColorClass = {
    pink: 'text-pink-500',
    green: 'text-emerald-500',
    blue: 'text-blue-500',
    sky: 'text-sky-500',
    purple: 'text-violet-500',
  }[element.color as keyof typeof colorConfig]

  const progressEmptyColorClass = {
    pink: 'text-pink-200',
    green: 'text-emerald-200',
    blue: 'text-blue-200',
    sky: 'text-sky-200',
    purple: 'text-violet-200',
  }[element.color as keyof typeof colorConfig]

  return (
    <div
      className="absolute"
      style={{
        left: element.position.x,
        top: element.position.y,
        transform: `rotate(${element.rotation}deg) scale(${element.scale})`,
        opacity: element.opacity,
      }}
    >
      <div
        className="animate-float"
        style={
          {
            '--float-delay': element.animationDelay,
            '--float-duration': element.animationDuration,
          } as React.CSSProperties
        }
      >
        <div
          className={`inline-flex items-center rounded-xl border ${colors.border} ${colors.bg} px-3 py-2.5 shadow-md shadow-gray-400/10 backdrop-blur-sm transition-all duration-500`}
        >
          {/* Badge */}
          <div
            className={`mr-3 flex items-center justify-center rounded-lg ${colors.badge} px-2 py-1.5 text-xs font-semibold text-white shadow-sm`}
          >
            {element.type === 'pdf' && 'PDF'}
            {element.type === 'email' && '@'}
            {element.type === 'phone' && <Phone className="h-3.5 w-3.5" />}
            {element.type === 'sms' && <MessageSquare className="h-3.5 w-3.5" />}
          </div>

          {/* Label */}
          <span className="mr-3 text-sm font-medium text-gray-800">{element.label}</span>

          {/* Progress indicator */}
          <div className="flex items-center gap-2">
            {element.type === 'phone' && (
              <div className="flex h-5 w-5 items-center justify-center">
                <img
                  src={getDemoInsurer('Progressive')?.logoUrl}
                  alt="Progressive"
                  className="h-4 w-4 flex-shrink-0 rounded object-contain"
                />
              </div>
            )}
            <CircularProgress
              value={element.progress.current}
              max={element.progress.total}
              colorClass={progressColorClass}
              emptyColorClass={progressEmptyColorClass}
            />
            <span className="text-xs font-medium text-gray-500">
              {element.progress.current}/{element.progress.total} {element.progress.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Features() {
  return (
    <div id="features" className="relative overflow-hidden bg-white pt-16 pb-8 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-20">
      {/* Floating decorative elements - hidden on mobile */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
        {floatingElements.map((element) => (
          <FloatingElement key={element.id} element={element} />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <p className="font-display text-3xl tracking-tight text-pretty text-gray-900 sm:text-4xl sm:text-balance lg:text-5xl">
            Complete insurance compliance automation
          </p>
          <p className="mt-4 text-base text-gray-600 sm:text-lg/8">
            Integrate Saturn into your existing systems, ingest documents, ensure accuracy, and automate all
            communication with brokers and borrowers—following up until fully compliant and writing updates back to your
            systems of record.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-8 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-[-8%] overflow-hidden rounded-xl shadow-2xl ring-1 ring-gray-900/10 sm:mb-[-12%]">
            <Image
              src="/dashboard-screenshot.png"
              alt="Saturn Dashboard showing compliance tracking, borrower breakdown, and policy management"
              width={1920}
              height={1080}
              className="h-auto max-h-64 w-full object-cover sm:max-h-96"
              priority
            />
          </div>
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-10 bottom-0 bg-gradient-to-t from-white pt-[5%] sm:-inset-x-20 sm:pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl px-4 sm:mt-16 sm:px-6 md:mt-20 lg:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 text-sm text-gray-600 sm:grid-cols-2 sm:text-base/7 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg sm:h-12 sm:w-12"
                  style={{
                    backgroundColor: feature.icon.props.className.includes('bg-blue-600')
                      ? '#2563eb'
                      : feature.icon.props.className.includes('bg-orange-600')
                        ? '#ea580c'
                        : feature.icon.props.className.includes('bg-sky-600')
                          ? '#0284c7'
                          : feature.icon.props.className.includes('bg-green-600')
                            ? '#16a34a'
                            : feature.icon.props.className.includes('bg-teal-600')
                              ? '#0d9488'
                              : '#2563eb',
                  }}
                >
                  {React.cloneElement(feature.icon, {
                    className: 'w-5 h-5 sm:w-6 sm:h-6 text-white',
                  })}
                </div>
              </div>
              <div>
                <dt className="text-sm font-semibold text-gray-900 sm:text-base">{feature.name}</dt>
                <dd className="mt-1 text-xs sm:text-sm">{feature.description}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
