export type EventName='lead_conversion'|'qualification_form_submission'|'contact_form_submission'|'whatsapp_click';
export function trackEvent(name:EventName,data:Record<string,unknown>={}){if(typeof window==='undefined')return;(window as any).dataLayer?.push({event:name,...data});(window as any).fbq?.('trackCustom',name,data)}
