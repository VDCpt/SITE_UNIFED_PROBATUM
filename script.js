/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * UNIFED – PROBATUM v13.5.0-PURE · DORA COMPLIANT · COURT READY
 * Sistema de Tradução Dinâmica PT/EN — Cobertura i18n Total · Glossário v3
 * ═══════════════════════════════════════════════════════════════════════════════
 */

// Idioma atual (padrão: PT) — declarado no escopo global para acesso por handlers HTML inline
let currentLanguage = 'pt';

try {

// ═══════════════════════════════════════════════════════════════════════
// i18n · BLOCO 1 — translations
// Chaves correspondem a id="<chave>" no DOM.
// Texto puro → injectTextPreserveIcons; HTML interno → translationsHTML.
// ═══════════════════════════════════════════════════════════════════════
const translations = {
    pt: {
        // ── Hero ──────────────────────────────────────────────────────
        heroTitle:              'Reconstituição da Verdade Material Digital.',
        heroSubtitle:           'Especialização em Peritagem Forense e Inteligência Económico-Financeira para o Setor Jurídico de Elite.',
        forensicBadgeText:      'PROVA DIGITAL MATERIAL · DISCREPÂNCIA CRÍTICA (BTOR vs BTF)',
        dropzoneText:           'Arraste um ficheiro para simular cadeia de custódia',
        // ── Estatísticas hero ─────────────────────────────────────────
        statLabel1:             'Evidências Processadas',
        statLabel2:             'Valor em Análise',
        statLabel3:             'Cadeia de Custódia',
        scrollText:             'DISCREPÂNCIA DETETADA · ROLAR PARA ANÁLISE',
        // ── Secções ───────────────────────────────────────────────────
        sectionTag1:            '01 · ANÁLISE ALGORÍTMICA',
        sectionTag2:            '02 · INVESTIGAÇÃO CRIPTO-FORENSE',
        sectionTag3:            '03 · MOTOR FORENSE',
        // ── Navegação ─────────────────────────────────────────────────
        navAudit:               'Auditoria Algorítmica',
        navBlockchain:          'Blockchain Forense',
        navSystem:              'Sistema UNIFED – PROBATUM',
        navConsult:             'Consultoria',
        navContactText:         'Contacto Seguro',
        // ── Contadores forenses ───────────────────────────────────────
        statDesc1:              'Faturas Analisadas',
        statDesc2:              'Ficheiros SAF-T',
        statDesc3:              'Transações Rastreadas',
        statDesc4:              'Processos Judiciais Suportados',
        // ── Botões ────────────────────────────────────────────────────
        btnReportText:          'VISUALIZAR MODELO DE PARECER TÉCNICO UNIFED – PROBATUM',
        btnCtaText:             'APRESENTAR PROVA',
        // ── CTA / Rodapé ──────────────────────────────────────────────
        ctaDesc:                'A Reconstituição da Verdade Material Digital resolve a causa. Consultoria estratégica para Sociedades de Advogados.',
        footerTagline:          'Unidade Independente de Inteligência Forense Económica e Financeira',
        // ── Metadados de sistema / Rodapé ─────────────────────────────
        footerIntegrity:        'VALIDAÇÃO DE INTEGRIDADE DO SISTEMA · MASTER HASH SHA-256: 65F805D9649D8C90B042D675B86C703832D847683E2D0FCA9B86C0E82FA20991',
        footerNote:             'Análise preliminar confidencial · Decreto-Lei n.º 28/2019',
        footerConsulting:       'Consultoria de Gestão e Auditoria Forense',
        footerRights:           'Todos os direitos reservados',
        footerAnalyst:          'Analista e Consultor Forense Independente',
        // ── 4 Eixos de Análise (labels DOM) ──────────────────────────
        axis1Label:             'EIXO 1 · ANÁLISE DETERMINÍSTICA DE DISCREPÂNCIAS',
        axis1Sub1:              'Discrepância BTOR vs BTF',
        axis1Sub2:              'Base Operacional / Faturada',
        axis2Label:             'EIXO 2 · MOTOR PREDITIVO ATF',
        axis2Sub1:              'Reconstrução cronológica',
        axis2Sub2:              'Gaps de registo',
        axis3Label:             'EIXO 3 · GATILHO PROCESSUAL: LIMBO CONTABILÍSTICO',
        axis3Sub1:              'Transações sem correspondência',
        axis3Sub2:              'Omissão objetiva',
        axis4Label:             'EIXO 4 · INVERSÃO DO ÓNUS DA PROVA',
        axis4Sub1:              'Presunção probatória material',
        axis4Sub2:              'Transferência do ónus ao arguido',
        axis4Sub3:              'Perante o douto tribunal',
        // ── Terminal estático ────────────────────────────────────────
        terminalStaticLine:     '[LOAD] Módulo de triangulação financeira',
        // ── Secção Auditoria ──────────────────────────────────────────
        auditDesc:              'Processamento de estruturas SAF-T e conformidade DAC7 com precisão de nível pericial. Identificação de anomalias fiscais e reconstrução de fluxos financeiros complexos através do motor forense UNIFED – PROBATUM v13.5.0-PURE.',
        auditFeature1:          'Extração dinâmica de dados (Fleet Extract)',
        auditFeature3:          'Diferenciação IVA 6% (transporte) / 23% (intermediação)',
        // ── Secção Blockchain ─────────────────────────────────────────
        blockchainDesc:         'Rastreio de ativos em ambientes descentralizados. Inteligência aplicada à recuperação de ativos e desarticulação de esquemas de branqueamento de capitais em Blockchain com validação SHA-256 e cadeia de custódia forense.',
        blockchainFeature1:     'Rastreio cross-chain (BTC, ETH, BSC, SOL)',
        blockchainFeature2:     'Deteção de mixers e privacy coins',
        blockchainFeature3:     'Relatório pericial com selo temporal RFC 3161',
        // ── Quantum Card (EIXO 1) ────────────────────────────────────
        btorLabel:              'BTOR (Base Operacional):',
        btfLabel:               'BTF (Base Faturada):',
        vat23Label:             'IVA 23% em Análise:',
        vat6Label:              'IVA 6% em Análise:',
        // ── VDC Features (EIXOS 2-4 + Custódia) ─────────────────────
        axis2Desc:              'Reconstrução cronológica de fluxos. Deteção de padrões sazonais e gaps de registo. Timestamp RFC 3161 imutável.',
        axis3Desc:              'Identificação de transações sem correspondência SAF-T. Diferencial BTOR/BTF documentado como omissão objetiva.',
        axis4Desc:              'Constituição de presunção probatória material. Fundamentação para transferência do ónus ao arguido perante o douto tribunal.',
        custodyDesc:            'ISO/IEC 27037 · DL 28/2019 · RGIT · UE 2022/2554 · QR de integridade pericial',
        // ── Report Overlay ───────────────────────────────────────────
        reportModeLabel:        'MODO DE VISUALIZAÇÃO PROTEGIDA · DOCUMENTO NÃO DESCARREGÁVEL',
        btnCloseReport:         'FECHAR',
        // ── Rodapé — links ───────────────────────────────────────────
        footerLinkPrivacy:      'Privacidade',
        footerLinkTerms:        'Termos Legais',
        footerLinkRGPD:         'RGPD',
        footerLinkCerts:        'Certificações',
        // ── Modal / Notas ────────────────────────────────────────────
        modalEnvLabel:          'AMBIENTE CONTROLADO',
        reportSmallNote:        '* Documento exemplificativo com valor probatório material',
    },
    en: {
        // ── Hero ──────────────────────────────────────────────────────
        heroTitle:              'Material Truth Reconstitution.',
        heroSubtitle:           'Forensic Expert Intelligence and Economic-Financial Analysis for High-Complexity Litigation.',
        forensicBadgeText:      'DIGITAL MATERIAL EVIDENCE · CRITICAL DISCREPANCY DETECTED (BTOR vs BTF)',
        dropzoneText:           'Drag a file to simulate forensic chain of custody',
        // ── Hero stats ────────────────────────────────────────────────
        statLabel1:             'Processed Exhibits',
        statLabel2:             'Value Under Analysis',
        statLabel3:             'Chain of Custody',
        scrollText:             'CRITICAL DISCREPANCY DETECTED · SCROLL FOR ANALYSIS',
        // ── Sections ──────────────────────────────────────────────────
        sectionTag1:            '01 · ALGORITHMIC ANALYSIS',
        sectionTag2:            '02 · CRYPTO-FORENSIC INVESTIGATION',
        sectionTag3:            '03 · FORENSIC ENGINE',
        // ── Navigation ────────────────────────────────────────────────
        navAudit:               'Algorithmic Audit',
        navBlockchain:          'Blockchain Forensics',
        navSystem:              'UNIFED – PROBATUM System',
        navConsult:             'Consultancy',
        navContactText:         'Secure Contact',
        // ── Forensic counters ─────────────────────────────────────────
        statDesc1:              'Invoices Analysed',
        statDesc2:              'SAF-T Files',
        statDesc3:              'Transactions Traced',
        statDesc4:              'Judicial Proceedings Supported',
        // ── Buttons ───────────────────────────────────────────────────
        btnReportText:          'VIEW UNIFED – PROBATUM TECHNICAL OPINION MODEL',
        btnCtaText:             'SUBMIT EVIDENCE',
        // ── CTA / Footer ──────────────────────────────────────────────
        ctaDesc:                'Material Truth Reconstitution resolves the case. Strategic consultancy for Law Firms.',
        footerTagline:          'Independent Unit of Economic and Financial Forensic Intelligence',
        // ── System metadata / Footer ──────────────────────────────────
        footerIntegrity:        'SYSTEM INTEGRITY VALIDATION · MASTER HASH SHA-256: 65F805D9649D8C90B042D675B86C703832D847683E2D0FCA9B86C0E82FA20991',
        footerNote:             'Confidential Preliminary Analysis · Decree-Law 28/2019',
        footerConsulting:       'Management Consulting & Forensic Audit',
        footerRights:           'All rights reserved',
        footerAnalyst:          'Independent Forensic Analyst & Consultant',
        // ── 4 Axes of Analysis (DOM labels) ──────────────────────────
        axis1Label:             'AXIS 1 · DETERMINISTIC DISCREPANCY ANALYSIS',
        axis1Sub1:              'BTOR vs BTF Discrepancy',
        axis1Sub2:              'Operational Base / Invoiced Base',
        axis2Label:             'AXIS 2 · ATF PREDICTIVE ENGINE',
        axis2Sub1:              'Chronological Flow Reconstruction',
        axis2Sub2:              'Record Gaps / Log Gaps',
        axis3Label:             'AXIS 3 · PROCEDURAL TRIGGER: ACCOUNTING LIMBO',
        axis3Sub1:              'Unmatched Transactions',
        axis3Sub2:              'Objective Omission',
        axis4Label:             'AXIS 4 · REVERSAL OF THE BURDEN OF PROOF',
        axis4Sub1:              'Substantive Evidentiary Presumption',
        axis4Sub2:              'Shifting the Burden to the Defendant',
        axis4Sub3:              'Before the Learned Court',
        // ── Static terminal ───────────────────────────────────────────
        terminalStaticLine:     '[LOAD] Financial Triangulation Module',
        // ── Audit section ─────────────────────────────────────────────
        auditDesc:              'SAF-T Structure Processing and DAC7 Compliance with expert-level precision. Tax anomaly identification and complex Financial Flow Reconstruction via the UNIFED – PROBATUM v13.5.0-PURE forensic engine.',
        auditFeature1:          'Dynamic Data Extraction (Fleet Extract)',
        auditFeature3:          'VAT Differentiation: 6% (Transport) / 23% (Intermediation)',
        // ── Blockchain section ────────────────────────────────────────
        blockchainDesc:         'Asset Tracing in decentralised environments. Applied intelligence for Asset Recovery and Dismantling of Money Laundering Schemes on Blockchain with SHA-256 validation and Forensic Chain of Custody.',
        blockchainFeature1:     'Cross-chain Tracking (BTC, ETH, BSC, SOL)',
        blockchainFeature2:     'Mixers & Privacy Coins Detection',
        blockchainFeature3:     'Forensic report with RFC 3161 Timestamping',
        // ── Quantum Card (AXIS 1) ─────────────────────────────────────
        btorLabel:              'BTOR (Operational Base):',
        btfLabel:               'BTF (Invoiced Base):',
        vat23Label:             'VAT 23% Under Analysis:',
        vat6Label:              'VAT 6% Under Analysis:',
        // ── VDC Features (AXES 2-4 + Custody) ────────────────────────
        axis2Desc:              'Chronological Flow Reconstruction. Seasonal pattern detection and Record Gaps / Log Gaps. Immutable RFC 3161 Timestamping.',
        axis3Desc:              'Identification of Unmatched Transactions in SAF-T. BTOR/BTF differential documented as Objective Omission.',
        axis4Desc:              'Establishment of Substantive Evidentiary Presumption. Grounds for Shifting the Burden to the Defendant before the Learned Court.',
        custodyDesc:            'ISO/IEC 27037 · DL 28/2019 · RGIT · EU 2022/2554 · Forensic integrity QR code',
        // ── Report Overlay ────────────────────────────────────────────
        reportModeLabel:        'PROTECTED VIEWING MODE · DOCUMENT NOT DOWNLOADABLE',
        btnCloseReport:         'CLOSE',
        // ── Footer — links ────────────────────────────────────────────
        footerLinkPrivacy:      'Privacy',
        footerLinkTerms:        'Legal Terms',
        footerLinkRGPD:         'GDPR',
        footerLinkCerts:        'Certifications',
        // ── Modal / Notes ─────────────────────────────────────────────
        modalEnvLabel:          'CONTROLLED ENVIRONMENT',
        reportSmallNote:        '* Illustrative document with material evidentiary value',
    }
};

// ═══════════════════════════════════════════════════════════════════════
// i18n · BLOCO 2 — translationsHTML
// Elementos com marcação interna (spans, em, strong).
// Usam innerHTML em vez de injectTextPreserveIcons.
// ═══════════════════════════════════════════════════════════════════════
const translationsHTML = {
    pt: {
        ctaH2:          'Detém a <span class="gold">Discrepância Crítica de Faturação</span>?',
        h2Audit:        'Auditoria <span class="text-white">Fiscal & Compliance</span>',
        h2Blockchain:   'Cadeia de Custódia Blockchain e <span class="text-white">Rastreabilidade (SHA-256)</span>',
        h2System:       'Sistema <span class="text-white">UNIFED – PROBATUM v13.5.0-PURE</span>',
        // ── auditFeature2: outer span tem dois term-spans internos ────
        auditFeature2:  '<span class="term" data-tooltip="Bank Transactions Over Reality - Base operacional real vs faturada">BTOR</span> vs <span class="term" data-tooltip="Base Tributável Faturada - Valor declarado em fatura">BTF</span>: Dupla discrepância',
        // ── Quantum Card: span de detalhe com term-spans ─────────────
        axis1Detail:    'Discrepância <span class="term" data-tooltip="Base Tributável Operacional Real (extratos)">BTOR</span> vs <span class="term" data-tooltip="Base Tributável Faturada (faturas)">BTF</span>',
        // ── Code blocks (pre): innerHTML = textContent puro ──────────
        codeBlockAudit: '\n[INFO] SAF-T Bruto / Ganhos: 10.157,73 €\n[INFO] Comissões Extrato: 2.447,89 €\n[INFO] Faturas: 262,94 €\n[WARN] Discrepância Crítica (BTOR vs BTF): 2.184,95 € (89,26%)\n[WARN] IVA em falta (23%): 502,54 €\n[WARN] IVA em falta (6%): 131,10 €\n[VERDICT] Discrepância Crítica de Faturação (BTOR vs BTF) DETETADA',
        codeBlockLedger:'\n0x8E239C061A5C6E834927183D29A0C4F3\n0x423A5D6210F9213456789ABCDEF0123\n│\n├─ Transação: 0x8E23... (ETH)\n├─ Timestamp: 2026-02-22 14:23:17 UTC\n├─ Mixer Detected: Tornado Cash\n└─ Wallet Cluster: 3 endereços relacionados',
        // ── VDC Features h4 com term-spans internos ──────────────────
        axis2Label:     'EIXO 2 · Motor Preditivo <span class="term" data-tooltip="Análise Temporal Forense — Reconstrução cronológica de fluxos financeiros com precisão de timestamp RFC 3161">ATF</span>',
        axis3Label:     'EIXO 3 · Gatilho Processual: <span class="term" data-tooltip="Limbo Contabilístico — Transações documentadas nos extratos operacionais sem correspondência nos registos contabilísticos declarados">Limbo Contabilístico</span>',
        axis4Label:     'EIXO 4 · Inversão do Ónus da Prova (<span class="term" data-tooltip="Art. 344.º n.º 2 CC — Inversão do ónus da prova quando a parte contrária impossibilita o cumprimento do ónus probatório">Art. 344.º n.º 2 CC</span>)',
        custodyLabel:   'Cadeia de Custódia <span class="term" data-tooltip="SHA-256 — Função hash criptográfica de 256 bits per ISO/IEC 27037">SHA-256</span> · Conformidade <span class="term" data-tooltip="Digital Operational Resilience Act (EU 2022/2554)">DORA</span>',
    },
    en: {
        ctaH2:          'Do You Hold the <span class="gold">Critical Tax Erosion Discrepancy</span>?',
        h2Audit:        'Algorithmic <span class="text-white">Fiscal Audit & Compliance</span>',
        h2Blockchain:   'Blockchain Forensic Chain of Custody and <span class="text-white">RFC 3161 Timestamping (SHA-256)</span>',
        h2System:       'System <span class="text-white">UNIFED – PROBATUM v13.5.0-PURE</span>',
        // ── auditFeature2: outer span with inner term-spans ───────────
        auditFeature2:  '<span class="term" data-tooltip="Bank Transactions Over Reality — Real operational base vs invoiced">BTOR</span> vs <span class="term" data-tooltip="Invoiced Tax Base — Declared invoice value">BTF</span>: Dual Discrepancy',
        // ── Quantum Card: detail span with term-spans ─────────────────
        axis1Detail:    'Discrepancy <span class="term" data-tooltip="Real Operational Taxable Base (extracts)">BTOR</span> vs <span class="term" data-tooltip="Invoiced Taxable Base (invoices)">BTF</span>',
        // ── Code blocks (pre): innerHTML = pure text ──────────────────
        codeBlockAudit: '\n[INFO] Gross SAF-T / Earnings: €10,157.73\n[INFO] Statement Commissions: €2,447.89\n[INFO] Invoices: €262.94\n[WARN] Critical Discrepancy (BTOR vs BTF): €2,184.95 (89.26%)\n[WARN] Missing VAT / Tax Gap (23%): €502.54\n[WARN] Missing VAT / Tax Gap (6%): €131.10\n[VERDICT] Critical Invoicing Discrepancy (BTOR vs BTF) DETECTED',
        codeBlockLedger:'\n0x8E239C061A5C6E834927183D29A0C4F3\n0x423A5D6210F9213456789ABCDEF0123\n│\n├─ Transaction: 0x8E23... (ETH)\n├─ Timestamp: 2026-02-22 14:23:17 UTC\n├─ Mixer Detected: Tornado Cash\n└─ Wallet Cluster: 3 related addresses',
        // ── VDC Features h4 with inner term-spans ────────────────────
        axis2Label:     'AXIS 2 · ATF Predictive Engine <span class="term" data-tooltip="Analytical Temporal Forensics — Chronological reconstruction of financial flows with RFC 3161 Timestamping precision">ATF</span>',
        axis3Label:     'AXIS 3 · Procedural Trigger: <span class="term" data-tooltip="Accounting Limbo — Transactions documented in operational extracts with no corresponding declared accounting records">Accounting Limbo</span>',
        axis4Label:     'AXIS 4 · Reversal of the Burden of Proof (<span class="term" data-tooltip="Civil Code Art. 344(2) — Reversal of the burden of proof when the opposing party prevents compliance with the evidentiary burden">Art. 344(2) CC</span>)',
        custodyLabel:   'Forensic Chain of Custody <span class="term" data-tooltip="SHA-256 — 256-bit cryptographic hash function per ISO/IEC 27037">SHA-256</span> · <span class="term" data-tooltip="Digital Operational Resilience Act (EU 2022/2554)">DORA</span> Compliance',
    }
};

// ═══════════════════════════════════════════════════════════════════════
// i18n · BLOCO 3 — uiStrings
// Mensagens de interface emitidas programaticamente (toasts, consola).
// Padrão de acesso: uiStrings[currentLanguage].<chave>
// ═══════════════════════════════════════════════════════════════════════
const uiStrings = {
    pt: {
        custodySimulated:  'Cadeia de custódia forense simulada com sucesso',
        hashSimDone:       'Simulação de hash concluída',
        hashCopied:        'Hash SHA-256 copiado para área de transferência',
        hashCopyError:     'Erro ao copiar hash',
        masterHashCopied:  'Master Hash SHA-256 copiado · Valide em qualquer verificador',
        systemActive:      '[NEXUS] UNIFED – PROBATUM v13.5.0-PURE · Sistema Forense Ativo · SHA-256',
        systemReady:       'Sistema pronto · v13.5.0-PURE · Aguardar evidência forense...',
        qrValidate:        'Validar Integridade',
        qrTooltip:         'QR Code SHA-256 · Carimbo RFC 3161 · Clique para copiar hash',
    },
    en: {
        custodySimulated:  'Forensic chain of custody successfully simulated',
        hashSimDone:       'Hash simulation complete',
        hashCopied:        'SHA-256 hash copied to clipboard',
        hashCopyError:     'Error copying hash',
        masterHashCopied:  'Master Hash SHA-256 copied · Validate in any independent verifier',
        systemActive:      '[NEXUS] UNIFED – PROBATUM v13.5.0-PURE · Forensic System Active · SHA-256',
        systemReady:       'System ready · v13.5.0-PURE · Awaiting forensic evidence...',
        qrValidate:        'Validate Integrity',
        qrTooltip:         'QR Code SHA-256 · RFC 3161 Timestamping · Click to copy hash',
    }
};

// ═══════════════════════════════════════════════════════════════════════
// [FIX P2] INJETOR DE TEXTO COM PRESERVAÇÃO DE NÓS DOM (Node Preservation)
//
// Substitui element.textContent (destrói childNodes tipo ElementNode).
// Itera childNodes: actualiza apenas TextNode (type 3) com conteúdo,
// preservando intactos todos os ElementNodes adjacentes (<i class="fas">).
// ═══════════════════════════════════════════════════════════════════════
function injectTextPreserveIcons(element, text) {
    let updated = false;

    element.childNodes.forEach(function(node) {
        if (updated) { return; }
        if (node.nodeType === 3 && node.textContent.trim().length > 0) {
            const leadingWhitespace = node.textContent.match(/^(\s*)/)[1];
            node.textContent = leadingWhitespace + text;
            updated = true;
        }
    });

    if (!updated) {
        element.appendChild(document.createTextNode(text));
    }
}

/**
 * Função de troca de idioma
 */
function switchLanguage() {
    currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';

    document.documentElement.setAttribute('lang', currentLanguage === 'pt' ? 'pt-PT' : 'en-US');

    // [DEBUG] Confirmação de execução — solicitado no Procedimento de Correção
    console.log('Idioma alterado para:', currentLanguage);

    const lang = translations[currentLanguage];
    Object.keys(lang).forEach(function(key) {
        const element = document.getElementById(key);
        if (element) { injectTextPreserveIcons(element, lang[key]); }
    });

    const langHTML = translationsHTML[currentLanguage];
    Object.keys(langHTML).forEach(function(key) {
        const element = document.getElementById(key);
        if (element) { element.innerHTML = langHTML[key]; }
    });

    updateLangToggleState();
    showLangChangeNotification();

    console.log(`[NEXUS-LANG] Idioma alterado para: ${currentLanguage.toUpperCase()}`);
}

function updateLangToggleState() {
    const ptOption = document.querySelector('.lang-option[data-lang="pt"]');
    const enOption = document.querySelector('.lang-option[data-lang="en"]');

    if (currentLanguage === 'pt') {
        ptOption?.classList.add('active');
        enOption?.classList.remove('active');
    } else {
        enOption?.classList.add('active');
        ptOption?.classList.remove('active');
    }
}

function showLangChangeNotification() {
    const isPT = currentLanguage === 'pt';
    const notification = document.createElement('div');
    notification.className = 'lang-notification';
    notification.innerHTML = `
        <i class="fas fa-language"></i>
        <div class="lang-notif-content">
            <span class="lang-notif-label">${isPT ? 'Português' : 'English'}</span>
            <span class="lang-notif-sub">${isPT ? 'Ambiente de leitura PT activo' : 'Reading environment EN active'}</span>
        </div>
    `;

    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// ═══════════════════════════════════════════════════════════════════════════════
// FIM DO SISTEMA DE TRADUÇÃO — CÓDIGO FORENSE ORIGINAL ABAIXO
// ═══════════════════════════════════════════════════════════════════════════════

'use strict';

// ============================================================================
// 1. ANIMAÇÃO DE DATA TRACKING (HERO CANVAS)
// ============================================================================
const canvas = document.getElementById('trackingCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
let mouseX = 0, mouseY = 0;

function initCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.x      = Math.random() * canvas.width;
        this.y      = Math.random() * canvas.height;
        this.size   = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color  = `rgba(74, 144, 226, ${Math.random() * 0.5 + 0.2})`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        const dx       = this.x - mouseX;
        const dy       = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
            const angle = Math.atan2(dy, dx);
            const force = (100 - distance) / 1000;
            this.x += Math.cos(angle) * force * 10;
            this.y += Math.sin(angle) * force * 10;
        }

        if (this.x > canvas.width)  this.x = 0;
        if (this.x < 0)             this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0)             this.y = canvas.height;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

// O(n²/2) — cada par verificado uma única vez
function drawEdges() {
    const len = particles.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            const dx   = particles[i].x - particles[j].x;
            const dy   = particles[i].y - particles[j].y;
            const dist = dx * dx + dy * dy;
            if (dist < 2500) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(74, 144, 226, ${0.1 * (1 - Math.sqrt(dist) / 50)})`;
                ctx.lineWidth   = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function createParticles() {
    for (let i = 0; i < 90; i++) { particles.push(new Particle()); }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(2, 6, 23, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawEdges();
    requestAnimationFrame(animate);
}

document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });
window.addEventListener('resize', initCanvas);
initCanvas();
createParticles();
animate();

// ============================================================================
// 2. SCROLL REVEAL
// ============================================================================
const revealElements = document.querySelectorAll('.reveal-text, h2, .stat-card, .vdc-feature');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
            el.style.opacity   = '1';
            el.style.transform = 'translateY(0)';
        } else {
            el.style.opacity   = '0';
            el.style.transform = 'translateY(20px)';
        }
    });
};

revealElements.forEach(el => {
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(20px)';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ============================================================================
// 3. TERMINAL DINÂMICO (LOGS FORENSES)
// ============================================================================
// [i18n-I3] Objeto bilíngue — setInterval lê [currentLanguage] em cada tick.
//
// Glossário aplicado (EN):
//   "Modo Forense"              → Forensic Mode
//   "Score de Persistência"     → Temporal Persistence Score
//   "Análise Determinística"    → Deterministic Discrepancy Analysis
//   "Limbo Contabilístico"      → Accounting Limbo
//   "Cadeia de custódia"        → Forensic Chain of Custody
//   "Inversão do Ónus da Prova" → Reversal of the Burden of Proof
//   "Discrepância Crítica"      → Critical Discrepancy Detected
const forensicActionsI18n = {
    pt: [
        '[NEXUS·M1] Stealth Network Interceptor ATIVO · Modo Forense',
        '[LOAD] Módulo ATF — Score de Persistência Temporal',
        '[MATCH] DAC7 vs SAF-T Recon · Delta calculado',
        '[RUNNING] Análise Determinística de Discrepâncias BTOR/BTF',
        '[VERDICT] Limbo Contabilístico Documentado · 2.184,95 €',
        '[VERIFYING] Cadeia de Custódia Forense SHA-256 · RFC 3161',
        '[COMPLETE] Inversão do Ónus da Prova · Art. 344.º n.º 2 CC',
    ],
    en: [
        '[NEXUS·M1] Stealth Network Interceptor ACTIVE · Forensic Mode',
        '[LOAD] ATF Module — Temporal Persistence Score',
        '[MATCH] DAC7 vs SAF-T Recon · Delta computed',
        '[RUNNING] Deterministic Discrepancy Analysis BTOR vs BTF',
        '[VERDICT] Accounting Limbo Documented · €2,184.95',
        '[VERIFYING] Forensic Chain of Custody SHA-256 · RFC 3161 Timestamping',
        '[COMPLETE] Reversal of the Burden of Proof · Civil Code Art. 344(2)',
    ]
};

let actionIndex = 0;
const terminalLine = document.getElementById('terminalDynamic');

if (terminalLine) {
    setInterval(() => {
        const actions = forensicActionsI18n[currentLanguage];
        terminalLine.textContent   = actions[actionIndex % actions.length];
        terminalLine.style.animation = 'none';
        terminalLine.offsetHeight;
        terminalLine.style.animation = 'fadeIn 0.5s';
        actionIndex = (actionIndex + 1) % actions.length;
    }, 2000);
}

// ============================================================================
// 4. DROPZONE SIMULADO (CADEIA DE CUSTÓDIA)
// ============================================================================
const dropzone      = document.getElementById('evidenceDropzone');
const hashSimulation = document.getElementById('hashSimulation');

if (dropzone) {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) { e.preventDefault(); e.stopPropagation(); }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, () => {
            dropzone.style.borderColor = 'var(--gold)';
            dropzone.style.background  = 'rgba(197, 160, 89, 0.1)';
        }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, () => {
            dropzone.style.borderColor = 'var(--cyan-glacial)';
            dropzone.style.background  = 'rgba(74, 144, 226, 0.05)';
        }, false);
    });

    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        const dummyHash = 'SHA-256: ' + Array.from({length: 64}, () =>
            Math.floor(Math.random() * 16).toString(16)).join('');
        hashSimulation.textContent = dummyHash;
        dropzone.classList.add('dropped');
        showToast(uiStrings[currentLanguage].custodySimulated, 'success');
        dropzone.style.transform = 'scale(0.98)';
        setTimeout(() => { dropzone.style.transform = 'scale(1)'; }, 200);
    });

    dropzone.addEventListener('click', () => {
        const dummyHash = 'SHA-256: ' + Array.from({length: 64}, () =>
            Math.floor(Math.random() * 16).toString(16)).join('');
        hashSimulation.textContent = dummyHash;
        dropzone.classList.add('dropped');
        showToast(uiStrings[currentLanguage].hashSimDone, 'info');
    });
}

// ============================================================================
// 5. FUNÇÃO DE CÓPIA DE HASH
// ============================================================================
function setupHashCopy() {
    const copyBtn     = document.getElementById('copyHashBtn');
    const hashElement = document.getElementById('master-hash');

    if (!copyBtn || !hashElement) return;

    copyBtn.addEventListener('click', async () => {
        const hash = hashElement.textContent.trim();
        try {
            await navigator.clipboard.writeText(hash);
            showToast(uiStrings[currentLanguage].hashCopied, 'success');
            copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => { copyBtn.innerHTML = '<i class="fas fa-copy"></i>'; }, 2000);
        } catch (err) {
            showToast(uiStrings[currentLanguage].hashCopyError, 'error');
        }
    });
}

// ============================================================================
// 6. SISTEMA DE TOAST
// ============================================================================
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;

    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-triangle', info: 'fa-info-circle' };
    toast.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i><p>${message}</p>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================================================
// 7. EFEITO DE DIGITAÇÃO NO CONSOLE
// ============================================================================
// [i18n-I3] Objeto bilíngue — messagesI18n[currentLanguage] no arranque.
//
// Equivalências jurídicas aplicadas (EN):
//   "Gatilho Processual"        → Procedural Trigger
//   "Cadeia de custódia"        → Chain of Custody (Forensic)
//   "Limbo Contabilístico"      → Accounting Limbo
//   "Discrepância BTOR/BTF"     → BTOR vs BTF Discrepancy
function typeWriterEffect() {
    const messagesI18n = {
        pt: [
            'UNIFED – PROBATUM v13.5.0-PURE · DORA COMPLIANT · COURT READY inicializando...',
            'Módulo ATF — Análise Temporal Forense ativo',
            'SHA-256: 65F805D9649D8C90B042D675B86C703832D847683E2D0FCA9B86C0E82FA20991 · RFC 3161 selado',
            'DAC7 vs SAF-T Recon — Cadeia de Custódia Forense estabelecida',
            'Limbo Contabilístico · Discrepância BTOR vs BTF: 2.184,95 € (89,26%)',
            'Gatilho Processual documentado · Art. 344.º n.º 2 CC',
            'NEXUS v13.5.0-PURE · Aguardar evidência · Data Proxy: Fleet Extract',
        ],
        en: [
            'UNIFED – PROBATUM v13.5.0-PURE · DORA COMPLIANT · COURT READY initialising...',
            'ATF Module — Temporal Forensic Analysis active',
            'SHA-256: 65F805D9649D8C90B042D675B86C703832D847683E2D0FCA9B86C0E82FA20991 · RFC 3161 Timestamping sealed',
            'DAC7 vs SAF-T Recon — Forensic Chain of Custody established',
            'Accounting Limbo · BTOR vs BTF Discrepancy: €2,184.95 (89.26%)',
            'Procedural Trigger documented · Reversal of the Burden of Proof',
            'NEXUS v13.5.0-PURE · Awaiting evidence · Data Proxy: Fleet Extract',
        ]
    };

    const messages = messagesI18n[currentLanguage];
    let i = 0;
    const interval = setInterval(() => {
        if (i < messages.length) {
            console.log(`%c[NEXUS] ${messages[i]}`, 'color: #4a90e2; font-family: monospace; font-weight: bold;');
            i++;
        } else {
            clearInterval(interval);
            console.log(
                `%c[NEXUS] ${uiStrings[currentLanguage].systemReady}`,
                'color: #c5a059; font-family: monospace;'
            );
        }
    }, 800);
}

// ============================================================================
// 8. MASTER HASH — Integridade via texto (QR removido — v13.5.0-PURE)
// ============================================================================
// QRCode.js removido. Integridade garantida exclusivamente pelo Master Hash SHA-256
// exposto em texto seleccionável e copiável via copyHashBtn.
// ============================================================================

// ============================================================================
// 9. PROTOCOLOS DE CONFORMIDADE
// ============================================================================
// [i18n-I4] protocolContent[lang][id] — objeto anidado bilíngue.
//
// Glossário aplicado (EN):
//   "Sigilo Pericial"           → Expert Confidentiality
//   "Criptografia AES-256"      → AES-256 Encryption
//   "Protocolo Zero-Knowledge"  → Zero-Knowledge Protocol
//   "Cadeia de custódia"        → Forensic Chain of Custody
//   "Sel temporal RFC 3161"     → RFC 3161 Timestamping
//   "Perícia técnica"           → Technical Expert Assistance
//   "RAT"                       → RoPA (Records of Processing Activities — GDPR Art. 30)
//   "Encarregado de Proteção"   → Data Protection Officer (DPO)
//   "Branqueamento de capitais" → Money Laundering
//   "Rastreio de ativos"        → Asset Tracing
//   "Recuperação de ativos"     → Asset Recovery
// ============================================================================
const protocolContent = {
    pt: {
        privacidade: {
            title: "P001 – POLÍTICA DE PRIVACIDADE E SIGILO PERICIAL",
            body: `<h3>Dever de Sigilo Profissional · Art. 135.º CP</h3>
               <p>A UNIFED – PROBATUM opera sob o princípio da <strong>inviolabilidade do segredo pericial</strong>. Todos os dados recolhidos no âmbito do Sistema UNIFED – PROBATUM v13.5.0-PURE são processados em ambientes segregados (Air-Gapped quando necessário), garantindo a confidencialidade absoluta das informações dos mandatários.</p>
               <ul>
                   <li><strong>Criptografia AES-256</strong> para dados em repouso, com chaves geradas localmente no ambiente do cliente.</li>
                   <li><strong>Protocolo Zero-Knowledge:</strong> Não retemos chaves de desencriptação dos clientes, impossibilitando o acesso não autorizado.</li>
                   <li><strong>Eliminação certificada de provas digitais</strong> após 30 dias da sentença transitada em julgado, conforme art. 5.º, n.º 1, alínea e) do RGPD.</li>
                   <li><strong>Cadeia de Custódia Forense:</strong> Registo de acessos auditável com selo temporal RFC 3161 para todas as operações sobre os dados.</li>
               </ul>
               <p>O cumprimento do <strong>Decreto-Lei n.º 28/2019</strong> assegura que todos os processos de tratamento de dados são documentados e auditáveis por entidades externas.</p>`
        },
        termos: {
            title: "T002 – TERMOS LEGAIS E CONDIÇÕES DE PERITAGEM",
            body: `<h3>Enquadramento Jurídico da Peritagem</h3>
               <p>Os serviços prestados pela UNIFED – PROBATUM constituem <strong>perícia técnica de assistência</strong> conforme os art. 467.º a 489.º do Código de Processo Civil e art. 151.º a 157.º do Código de Processo Penal. O Sistema UNIFED – PROBATUM v13.5.0-PURE é uma ferramenta de apoio à decisão e não substitui o juízo crítico do perito nomeado pelo tribunal.</p>
               <ul>
                   <li><strong>Propriedade Intelectual:</strong> Os algoritmos de deteção de discrepâncias (BTOR vs BTF), os schemas de mapeamento e o motor de triangulação financeira são propriedade exclusiva da UNIFED – PROBATUM, protegidos nos termos do Código do Direito de Autor.</li>
                   <li><strong>Validade probatória:</strong> Os relatórios são assinados digitalmente com selo temporal RFC 3161 e hash SHA-256, garantindo a integridade e não-repúdio da prova.</li>
                   <li><strong>Responsabilidade técnica:</strong> A UNIFED – PROBATUM responde pela exatidão dos algoritmos nos termos do art. 483.º do Código Civil.</li>
                   <li><strong>Imutabilidade:</strong> Qualquer tentativa de alteração dos relatórios periciais invalida automaticamente o hash SHA-256, tornando a prova nula.</li>
               </ul>`
        },
        rgpd: {
            title: "R003 – CONFORMIDADE RGPD & DATA PROTECTION",
            body: `<h3>Tratamento de Dados Sensíveis · Regulamento (UE) 2016/679</h3>
               <p>Em conformidade com o Regulamento (UE) 2016/679 (RGPD), a UNIFED – PROBATUM atua como <strong>subcontratante para fins de investigação e prova judicial</strong>, ao abrigo do Art. 9.º, n.º 2, alínea f).</p>
               <ul>
                   <li><strong>Encarregado de Proteção de Dados (DPO):</strong> Dedicado a processos forenses, com contacto direto para os mandatários.</li>
                   <li><strong>Registo de Atividades de Tratamento (RAT):</strong> Documentação completa e auditável, disponível para fiscalização pela CNPD.</li>
                   <li><strong>Direito ao Esquecimento:</strong> Aplicado mediante autorização judicial, após trânsito em julgado da decisão.</li>
                   <li><strong>Logs de Acesso Imutáveis:</strong> Registo pormenorizado com timestamp RFC 3161 de quem acedeu a cada byte de evidência.</li>
                   <li><strong>Notificação de brechas:</strong> Protocolo de comunicação em menos de 12 horas, conforme art. 33.º RGPD.</li>
               </ul>`
        },
        certificacoes: {
            title: "C004 – CERTIFICAÇÕES E NORMAS TÉCNICAS",
            body: `<h3>Standards Internacionais de Cadeia de Custódia Forense</h3>
               <p>A metodologia PROBATUM alinha-se com os standards internacionais de excelência em computação forense e auditoria digital:</p>
               <ul>
                   <li><strong>ISO/IEC 27037:2012:</strong> Diretrizes para identificação, recolha, aquisição e preservação de evidência digital.</li>
                   <li><strong>ISO/IEC 27001:2022:</strong> Sistema de Gestão de Segurança da Informação aplicado a processos forenses.</li>
                   <li><strong>NIST SP 800-86:</strong> Guia para Integração de Técnicas Forenses na Resposta a Incidentes.</li>
                   <li><strong>RFC 3161:</strong> Protocolo de Selagem Temporal (Time-Stamp Protocol - TSP) para Infraestruturas de Chaves Públicas X.509.</li>
                   <li><strong>ISO 9001:2015:</strong> Gestão de qualidade em processos de auditoria económica e financeira.</li>
                   <li><strong>DORA (Reg. UE 2022/2554):</strong> Algoritmo em conformidade com os requisitos de resiliência operacional digital.</li>
               </ul>
               <p><strong>Protocolo de Integridade UNIFED – PROBATUM:</strong> A precisão matemática e a custódia dos dados são asseguradas por hashing SHA-256 e verificadas pelo Responsável em cada relatório final, garantindo a conformidade com as Normas Internacionais de Auditoria e a legislação nacional vigente.</p>`
        }
    },
    en: {
        privacidade: {
            title: "P001 – PRIVACY POLICY & EXPERT CONFIDENTIALITY",
            body: `<h3>Duty of Professional Confidentiality · Criminal Code Art. 135</h3>
               <p>UNIFED – PROBATUM operates under the principle of <strong>inviolability of expert confidentiality</strong>. All data collected under the UNIFED – PROBATUM v13.5.0-PURE System is processed in segregated environments (Air-Gapped where required), ensuring absolute confidentiality of counsel information.</p>
               <ul>
                   <li><strong>AES-256 Encryption</strong> for data at rest, with keys generated locally in the client environment.</li>
                   <li><strong>Zero-Knowledge Protocol:</strong> We do not retain client decryption keys, preventing unauthorised access.</li>
                   <li><strong>Certified digital evidence deletion</strong> 30 days after final judgment, pursuant to GDPR Art. 5(1)(e).</li>
                   <li><strong>Forensic Chain of Custody:</strong> Auditable access log with RFC 3161 Timestamping for all data operations.</li>
               </ul>
               <p>Compliance with <strong>Decree-Law 28/2019</strong> ensures all data processing activities are documented and externally auditable.</p>`
        },
        termos: {
            title: "T002 – LEGAL TERMS & CONDITIONS OF EXPERT ENGAGEMENT",
            body: `<h3>Legal Framework for Expert Testimony</h3>
               <p>Services rendered by UNIFED – PROBATUM constitute <strong>Technical Expert Assistance</strong> pursuant to Civil Procedure Code Art. 467–489 and Criminal Procedure Code Art. 151–157 (Portugal). The UNIFED – PROBATUM v13.5.0-PURE System is a decision-support tool and does not replace the critical judgement of the court-appointed expert.</p>
               <ul>
                   <li><strong>Intellectual Property:</strong> The BTOR vs BTF Discrepancy detection algorithms and financial triangulation engine are the exclusive property of UNIFED – PROBATUM, protected under the Copyright Code.</li>
                   <li><strong>Evidentiary validity:</strong> Reports are digitally signed with RFC 3161 Timestamping and SHA-256 hash, guaranteeing integrity and non-repudiation of evidence.</li>
                   <li><strong>Technical liability:</strong> UNIFED – PROBATUM is accountable for algorithm accuracy pursuant to Civil Code Art. 483.</li>
                   <li><strong>Immutability:</strong> Any attempt to alter forensic reports automatically invalidates the SHA-256 hash, rendering the evidence null.</li>
               </ul>`
        },
        rgpd: {
            title: "R003 – GDPR & DATA PROTECTION COMPLIANCE",
            body: `<h3>Sensitive Data Processing · Regulation (EU) 2016/679</h3>
               <p>In compliance with Regulation (EU) 2016/679 (GDPR), UNIFED – PROBATUM acts as <strong>data processor for judicial investigation and evidence purposes</strong>, under Art. 9(2)(f), which permits processing of sensitive data where necessary for the establishment, exercise or defence of legal claims.</p>
               <ul>
                   <li><strong>Data Protection Officer (DPO):</strong> Dedicated to forensic proceedings, with direct contact for legal counsel.</li>
                   <li><strong>Records of Processing Activities (RoPA):</strong> Full, auditable documentation — GDPR Art. 30 — available for supervisory authority inspection.</li>
                   <li><strong>Right to Erasure:</strong> Applied upon judicial authorisation, following final judgment.</li>
                   <li><strong>Immutable Access Logs:</strong> Detailed record of every access to each byte of evidence, with RFC 3161 Timestamping.</li>
                   <li><strong>Breach notification:</strong> Communication protocol within 12 hours, pursuant to GDPR Art. 33.</li>
               </ul>`
        },
        certificacoes: {
            title: "C004 – CERTIFICATIONS & TECHNICAL STANDARDS",
            body: `<h3>International Forensic Chain of Custody Standards</h3>
               <p>The PROBATUM methodology aligns with international standards of excellence in digital forensics and digital auditing:</p>
               <ul>
                   <li><strong>ISO/IEC 27037:2012:</strong> Guidelines for identification, collection, acquisition and preservation of digital evidence.</li>
                   <li><strong>ISO/IEC 27001:2022:</strong> Information Security Management System applied to forensic processes.</li>
                   <li><strong>NIST SP 800-86:</strong> Guide to Integrating Forensic Techniques into Incident Response.</li>
                   <li><strong>RFC 3161:</strong> Internet X.509 Public Key Infrastructure Time-Stamp Protocol (TSP) — RFC 3161 Timestamping.</li>
                   <li><strong>ISO 9001:2015:</strong> Quality management in economic and financial audit processes.</li>
                   <li><strong>DORA (Reg. EU 2022/2554):</strong> Financial discrepancy detection algorithm compliant with digital operational resilience requirements.</li>
               </ul>
               <p><strong>UNIFED – PROBATUM Integrity Protocol:</strong> Mathematical precision and data custody are guaranteed by SHA-256 hashing, verified by the Responsible Expert on each final report, ensuring compliance with International Auditing Standards and applicable law.</p>`
        }
    }
};

function openProtocol(id) {
    const modal = document.getElementById('protocolModal');
    const title = document.getElementById('modalTitle');
    const text  = document.getElementById('protocolText');
    const proto = protocolContent[currentLanguage][id];

    if (modal && title && text && proto) {
        title.innerText  = proto.title;
        text.innerHTML   = proto.body;
        modal.style.display         = 'block';
        document.body.style.overflow = 'hidden';
        console.log(`%c[NEXUS] Protocolo aberto: ${id} - ${proto.title}`, 'color: #c5a059; font-family: monospace;');
    }
}

function closeProtocol() {
    const modal = document.getElementById('protocolModal');
    if (modal) {
        modal.style.display          = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ============================================================================
// 10. VISUALIZADOR DE RELATÓRIO FORENSE
// ============================================================================
// [i18n-I2] buildReportTemplate(lang) — template bilíngue por ramo if/return.
//
// Glossário aplicado integralmente (EN):
//   "Objeto da Perícia"              → Scope of Expert Examination
//   "SAF-T Structure Processing"     aplicado em metodologia
//   "DAC7 Compliance"                aplicado em metodologia
//   "Tax Anomalies"                  aplicado em findings
//   "Financial Flow Reconstruction"  aplicado em metodologia
//   "Dynamic Data Extraction"        aplicado em Fleet Extract
//   "Dual Discrepancy (BTOR vs BTF)" aplicado nos achados
//   "VAT Differentiation (6%/23%)"   aplicado na tabela
//   "Gross SAF-T / Earnings"         aplicado nos valores
//   "Missing VAT / Tax Gap"          aplicado nos findings
//   "Critical Discrepancy Detected"  aplicado no verdict
//   "Asset Tracing"                  aplicado na secção blockchain
//   "Asset Recovery"                 aplicado nas recomendações
//   "Money Laundering"               aplicado na secção blockchain
//   "Dismantling of Schemes"         aplicado nas conclusões
//   "Cross-chain Tracking"           aplicado na secção blockchain
//   "Mixers & Privacy Coins Detection" aplicado no cluster
//   "Forensic Chain of Custody"      aplicado em cadeia de custódia
//   "RFC 3161 Timestamping"          aplicado em metadados
//   EIXO 1–4                         aplicado no corpo do relatório
//   "Loss of Chance"                 aplicado em perdas de chance
//   "Reversal of the Burden of Proof" aplicado na conclusão
//   "Before the Learned Court"       aplicado na recomendação
//   "Shifting the Burden to the Defendant" aplicado na conclusão
//   "Confidential Preliminary Analysis" aplicado no header
//   "Management Consulting & Forensic Audit" aplicado no rodapé
//   "Independent Forensic Analyst"   aplicado na assinatura
// ============================================================================
function buildReportTemplate(lang) {
    const locale      = lang === 'pt' ? 'pt-PT' : 'en-GB';
    const currentDate = new Date().toLocaleDateString(locale, {
        day: '2-digit', month: '2-digit', year: 'numeric'
    });

    if (lang === 'pt') { return `
        <div class="report-header-legal">
            <div>
                <strong>UNIFED – PROBATUM</strong><br>
                Consultoria de Gestão e Auditoria Forense<br>
                Ref: PER-2026-001-UNIFED
            </div>
            <div style="text-align:right">
                <strong>CONFIDENCIAL</strong><br>
                Cadeia de Custódia Forense: Ativa<br>
                Data: ${currentDate}
            </div>
        </div>

        <div class="report-body">
            <h1>Relatório Técnico Económico-Financeiro</h1>

            <h2>1. OBJETO DA PERÍCIA</h2>
            <p>Análise de fluxo de ativos e auditoria algorítmica ao Sistema de Faturação da entidade sob investigação, com recurso ao protocolo <strong>UNIFED – PROBATUM (Intelligent Forensic Digital Evidence)</strong> v13.5.0-PURE. O perímetro de análise compreende o período fiscal de 2025, com base nos ficheiros SAF-T (PT) e extratos de plataforma fornecidos.</p>

            <h2>2. METODOLOGIA (BTOR / BTF) · Data Proxy: Fleet Extract</h2>
            <p><strong>[Nota Metodológica · DORA COMPLIANT]</strong> Os dados operacionais são obtidos por <em>Data Proxy: Fleet Extract</em> — extracção dinâmica directa dos registos da plataforma/frota, constituindo prova primária independente da faturação declarada. Esta abordagem garante imutabilidade e rastreabilidade total da fonte probatória (ISO/IEC 27037 · RFC 3161).</p>
            <p>Foi aplicada a técnica de <strong>Busca Técnica Financeira (BTF)</strong> sobre os ficheiros SAF-T (PT) do período Q1-Q4, em cruzamento com os extratos operacionais (BTOR). O algoritmo de triangulação financeira do sistema UNIFED – PROBATUM detetou anomalias fiscais na estrutura dos registos que sugerem manipulação de dados <em>a posteriori</em> e/ou diferencial de base em análise. Processamento de estruturas SAF-T e conformidade DAC7 validados em cada iteração.</p>

            <h2>3. ANÁLISE DE DISCREPÂNCIAS — 4 EIXOS (UNIFED – PROBATUM)</h2>
            <p><strong>EIXO 1 · ANÁLISE DETERMINÍSTICA DE DISCREPÂNCIAS:</strong> Discrepância BTOR vs BTF · Base Operacional vs Faturada.</p>
            <p><strong>EIXO 2 · MOTOR PREDITIVO ATF:</strong> Reconstrução cronológica de fluxos financeiros · Gaps de registo identificados.</p>
            <p><strong>EIXO 3 · GATILHO PROCESSUAL — LIMBO CONTABILÍSTICO:</strong> Transações sem correspondência · Omissão objetiva documentada.</p>
            <p><strong>EIXO 4 · INVERSÃO DO ÓNUS DA PROVA:</strong> Presunção probatória material · Transferência do ónus ao arguido · Perante o douto tribunal.</p>

            <table class="report-table">
                <thead>
                    <tr>
                        <th>Parâmetro</th>
                        <th>SAF-T Bruto / Declarado (BTF)</th>
                        <th>Ganhos / Valor Forense (BTOR)</th>
                        <th>Desvio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Comissões Extrato / Faturas (Intermediação)</td>
                        <td>262,94 €</td>
                        <td>2.447,89 €</td>
                        <td style="color:#d97706; font-weight:bold">+2.184,95 € (89,26%)</td>
                    </tr>
                    <tr>
                        <td>Diferenciação IVA 23% (Intermediação)</td>
                        <td>60,48 €</td>
                        <td>563,01 €</td>
                        <td style="color:#d97706; font-weight:bold">+502,54 €</td>
                    </tr>
                    <tr>
                        <td>Diferenciação IVA 6% (Transporte)</td>
                        <td>15,78 €</td>
                        <td>146,87 €</td>
                        <td style="color:#d97706; font-weight:bold">+131,10 €</td>
                    </tr>
                    <tr>
                        <td>Volume de Negócios Total</td>
                        <td>10.157,73 €</td>
                        <td>12.342,68 €</td>
                        <td style="color:#ca8a04">+2.184,95 € (21,5%)</td>
                    </tr>
                </tbody>
            </table>

            <h2>4. PROVA MATERIAL DIGITAL (BLOCKCHAIN)</h2>
            <p>Rastreio de ativos efetuado na rede Ethereum identificou a conversão de ativos em <em>Stablecoins</em> (USDT) com destino a carteiras não declaradas nos registos contabilísticos oficiais. Rastreio Cross-chain aplicado para mapeamento de fluxos inter-plataforma.</p>
            <p><strong>Hash de Transação suspeita:</strong> <span class="mono-hash">0x71c9f3a2b8e4d5c6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0</span></p>
            <p><strong>Endereço de destino:</strong> <span class="mono-hash">0x3f5a2b8e4d5c6a7b8c9d0e1f2a3b4c5d6e7f8a9b</span></p>
            <p><strong>Cluster detetado — Deteção de Mixers:</strong> 3 endereços relacionados com atividade de mixer (Tornado Cash) no período em análise. Indícios de branqueamento de capitais e desarticulação de esquemas de dissimulação de origem de fundos.</p>

            <h2>5. CADEIA DE CUSTÓDIA FORENSE</h2>
            <p>Todas as evidências processadas foram seladas com hash SHA-256 e timestamp RFC 3161, garantindo a integridade e imutabilidade da prova digital. Abaixo, os hashes dos principais ficheiros analisados:</p>
            <table class="report-table">
                <tr><td><strong>131509_202512.csv</strong></td><td class="mono-hash">d098483e91961126b532263d1c889c3197b3b1272f32ca9b46b314dba8730ab0</td></tr>
                <tr><td><strong>extrato_dezembro.pdf</strong></td><td class="mono-hash">b522e2ae4377b9fd39b772aea1603882b47d16971d5e95b357</td></tr>
                <tr><td><strong>fatura_PT1126-5834.pdf</strong></td><td class="mono-hash">1a65fb6fdb1782bec8c167327c5a76f6ad570b1dc7f34d349a8d96739cb1ab4</td></tr>
            </table>

            <h2>6. CONCLUSÃO TÉCNICA E QUANTIFICAÇÃO DO DANO</h2>
            <p>Com base na evidência digital recolhida e processada pelo motor forense UNIFED – PROBATUM v13.5.0-PURE, conclui-se pela <strong>existência de quebra na integridade dos dados fiscais — Discrepância Crítica Detetada</strong>, configurando indícios de infração prevista no RGIT, nomeadamente:</p>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li>Dupla discrepância (BTOR vs BTF) — Comissões: <strong>2.184,95 €</strong></li>
                <li>IVA em falta (23% e 6%) — total: <strong>633,64 €</strong></li>
                <li>Discrepância entre valores declarados em DAC7 e registos SAF-T</li>
            </ul>

            <h2>6.1 PERDAS DE CHANCE E DANO REPUTACIONAL</h2>
            <p>Para além do prejuízo patrimonial direto quantificado, o presente relatório documenta, nos termos do art. 564.º do Código Civil, a existência de <strong>danos por perda de chance</strong> decorrentes das omissões fiscais identificadas:</p>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li><strong>Perda de chance contratual:</strong> A divergência BTOR/BTF de 89,26% constitui impedimento objetivo à obtenção de financiamento, quantificável em função das oportunidades documentadas no período Q1–Q4/2025.</li>
                <li><strong>Dano Reputacional via Risk Scoring AT:</strong> A acumulação de divergências SAF-T/DAC7 (desvio ≥ 21,3% no volume de negócios total) gera degradação objetiva do perfil de risco com impacto mensurável na probabilidade de inspeção externa.</li>
                <li><strong>Nexo causal documentado:</strong> O Motor ATF v13.5.0-PURE estabelece cronologia determinística satisfazendo a causalidade adequada (art. 563.º CC). Transferência do ónus ao arguido fundamentada — perante o douto tribunal — pela presunção probatória material.</li>
            </ul>
            <p><strong>Recomendação pericial:</strong> Participação à Autoridade Tributária nos termos do art. 59.º, n.º 1 da LGT; instauração de procedimento de inspeção externa; recuperação de ativos e avaliação de pedido de indemnização perante o douto tribunal competente.</p>

            <div class="report-footer-signature">
                <strong>Ass. Consultor Técnico</strong>
                <small>Analista e Consultor Forense Independente</small><br>
                <small style="font-family: monospace;">Assinado Digitalmente (SHA-256: a1b2c3...f6e7)</small><br>
                <small style="font-family: monospace;">RFC 3161 Timestamping: ${currentDate} 14:23:17 UTC</small>
            </div>
        </div>`; }

    // ── lang === 'en' ────────────────────────────────────────────────────────
    return `
        <div class="report-header-legal">
            <div>
                <strong>UNIFED – PROBATUM</strong><br>
                Management Consulting &amp; Forensic Audit<br>
                Ref: PER-2026-001-UNIFED
            </div>
            <div style="text-align:right">
                <strong>CONFIDENTIAL — Confidential Preliminary Analysis</strong><br>
                Forensic Chain of Custody: Active<br>
                Date: ${currentDate}
            </div>
        </div>

        <div class="report-body">
            <h1>Economic &amp; Financial Forensic Expert Report</h1>

            <h2>1. SCOPE OF EXPERT EXAMINATION</h2>
            <p>Asset flow analysis and algorithmic audit of the Invoicing System of the entity under investigation, using the <strong>UNIFED – PROBATUM (Intelligent Forensic Digital Evidence)</strong> v13.5.0-PURE protocol. The analysis perimeter covers fiscal year 2025, based on SAF-T (PT) files and platform extracts provided.</p>

            <h2>2. METHODOLOGY (BTOR / BTF) · Data Proxy: Fleet Extract</h2>
            <p><strong>[Methodological Note · DORA COMPLIANT]</strong> Operational data is obtained via <em>Data Proxy: Fleet Extract</em> — Dynamic Data Extraction directly from platform/fleet records, constituting primary evidence independent of declared invoicing. SAF-T Structure Processing and DAC7 Compliance validated at each iteration (ISO/IEC 27037 · RFC 3161 Timestamping).</p>
            <p>The <strong>Financial Technical Search (BTF)</strong> technique was applied to SAF-T (PT) files for Q1–Q4, cross-referenced against operational extracts (BTOR). The UNIFED – PROBATUM financial triangulation algorithm detected Tax Anomalies in record structure suggesting <em>ex post</em> data manipulation. Financial Flow Reconstruction completed via ATF Predictive Engine.</p>

            <h2>3. DISCREPANCY ANALYSIS — 4 AXES (UNIFED – PROBATUM)</h2>
            <p><strong>AXIS 1 · DETERMINISTIC DISCREPANCY ANALYSIS:</strong> BTOR vs BTF Discrepancy · Operational Base vs Invoiced Base.</p>
            <p><strong>AXIS 2 · ATF PREDICTIVE ENGINE:</strong> Chronological Flow Reconstruction · Record Gaps / Log Gaps identified.</p>
            <p><strong>AXIS 3 · PROCEDURAL TRIGGER — ACCOUNTING LIMBO:</strong> Unmatched Transactions · Objective Omission documented.</p>
            <p><strong>AXIS 4 · REVERSAL OF THE BURDEN OF PROOF:</strong> Substantive Evidentiary Presumption · Shifting the Burden to the Defendant · Before the Learned Court.</p>

            <table class="report-table">
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Gross SAF-T / Declared (BTF)</th>
                        <th>Earnings / Forensic Value (BTOR)</th>
                        <th>Variance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Statement Commissions / Invoices (Intermediation)</td>
                        <td>€262.94</td>
                        <td>€2,447.89</td>
                        <td style="color:#d97706; font-weight:bold">+€2,184.95 (89.26%) — Dual Discrepancy</td>
                    </tr>
                    <tr>
                        <td>VAT Differentiation 23% (Intermediation)</td>
                        <td>€60.48</td>
                        <td>€563.01</td>
                        <td style="color:#d97706; font-weight:bold">+€502.54 — Missing VAT / Tax Gap</td>
                    </tr>
                    <tr>
                        <td>VAT Differentiation 6% (Transport)</td>
                        <td>€15.78</td>
                        <td>€146.87</td>
                        <td style="color:#d97706; font-weight:bold">+€131.10 — Missing VAT / Tax Gap</td>
                    </tr>
                    <tr>
                        <td>Total Turnover</td>
                        <td>€10,157.73</td>
                        <td>€12,342.68</td>
                        <td style="color:#ca8a04">+€2,184.95 (21.5%) — Critical Discrepancy Detected</td>
                    </tr>
                </tbody>
            </table>

            <h2>4. DIGITAL MATERIAL EVIDENCE (BLOCKCHAIN)</h2>
            <p>Asset Tracing conducted on the Ethereum network identified the conversion of assets into <em>Stablecoins</em> (USDT) directed to wallets undeclared in official accounting records. Cross-chain Tracking applied for inter-platform flow mapping.</p>
            <p><strong>Suspected Transaction Hash:</strong> <span class="mono-hash">0x71c9f3a2b8e4d5c6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0</span></p>
            <p><strong>Destination address:</strong> <span class="mono-hash">0x3f5a2b8e4d5c6a7b8c9d0e1f2a3b4c5d6e7f8a9b</span></p>
            <p><strong>Cluster detected — Mixers &amp; Privacy Coins Detection:</strong> 3 addresses associated with mixer activity (Tornado Cash) in the analysis period. Prima facie indications of Money Laundering and Dismantling of Schemes for concealment of funds origin.</p>

            <h2>5. FORENSIC CHAIN OF CUSTODY</h2>
            <p>All processed evidence was sealed with SHA-256 hash and RFC 3161 Timestamping, guaranteeing the integrity and immutability of digital evidence:</p>
            <table class="report-table">
                <tr><td><strong>131509_202512.csv</strong></td><td class="mono-hash">d098483e91961126b532263d1c889c3197b3b1272f32ca9b46b314dba8730ab0</td></tr>
                <tr><td><strong>extrato_dezembro.pdf</strong></td><td class="mono-hash">b522e2ae4377b9fd39b772aea1603882b47d16971d5e95b357</td></tr>
                <tr><td><strong>fatura_PT1126-5834.pdf</strong></td><td class="mono-hash">1a65fb6fdb1782bec8c167327c5a76f6ad570b1dc7f34d349a8d96739cb1ab4</td></tr>
            </table>

            <h2>6. TECHNICAL FINDINGS &amp; DAMAGE QUANTIFICATION</h2>
            <p>On the basis of digital evidence processed by the UNIFED – PROBATUM v13.5.0-PURE forensic engine, it is concluded that there exists a <strong>breach of fiscal data integrity — Critical Discrepancy Detected</strong>, constituting prima facie evidence under the General Tax Infraction Regime (RGIT):</p>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li>Dual Discrepancy (BTOR vs BTF) — Statement Commissions / Invoices: <strong>€2,184.95</strong></li>
                <li>Missing VAT / Tax Gap (23% and 6%): <strong>€633.64</strong></li>
                <li>Discrepancy between DAC7 Compliance values and SAF-T records</li>
            </ul>

            <h2>6.1 LOSS OF CHANCE &amp; REPUTATIONAL DAMAGE</h2>
            <p>Beyond the quantified direct patrimonial loss, this report documents, pursuant to Civil Code Art. 564, the existence of <strong>Loss of Chance damages</strong> arising from identified fiscal omissions:</p>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li><strong>Contractual Loss of Chance:</strong> The 89.26% BTOR vs BTF Discrepancy constitutes an objective impediment to financing, quantifiable against documented opportunities in Q1–Q4/2025.</li>
                <li><strong>Reputational Damage via Tax Authority Risk Scoring:</strong> SAF-T/DAC7 divergences (variance ≥ 21.3% in total turnover) objectively degrade the risk profile with measurable impact on external inspection probability.</li>
                <li><strong>Documented causal link:</strong> The ATF Engine v13.5.0-PURE establishes a deterministic chronology satisfying the adequate causal link requirement (Civil Code Art. 563). Substantive Evidentiary Presumption established — Shifting the Burden to the Defendant — before the Learned Court.</li>
            </ul>
            <p><strong>Expert recommendation:</strong> Referral to the Tax Authority pursuant to General Tax Law Art. 59(1); initiation of external inspection proceedings; Asset Recovery proceedings; and assessment of claim for patrimonial damages before the Learned Court.</p>

            <div class="report-footer-signature">
                <strong>Assoc. Technical Consultant</strong>
                <small>Independent Forensic Analyst &amp; Consultant</small><br>
                <small style="font-family: monospace;">Digitally Signed (SHA-256: a1b2c3...f6e7)</small><br>
                <small style="font-family: monospace;">RFC 3161 Timestamping: ${currentDate} 14:23:17 UTC</small>
            </div>
        </div>`;
}

function openForensicReport() {
    const reportOverlay = document.getElementById('reportOverlay');
    const reportContent = document.getElementById('reportContent');

    if (!reportOverlay || !reportContent) return;

    reportContent.innerHTML      = buildReportTemplate(currentLanguage);
    reportOverlay.style.display  = 'block';
    document.body.style.overflow = 'hidden';

    console.log('%c[NEXUS] Visualizador de relatório forense PURE aberto', 'color: #4a90e2; font-family: monospace;');
}

function closeForensicReport() {
    const reportOverlay = document.getElementById('reportOverlay');
    if (reportOverlay) {
        reportOverlay.style.display  = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ============================================================================
// 11. INICIALIZAÇÃO
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c[NEXUS] UNIFED – PROBATUM v13.5.0-PURE · Sistema Forense Ativo.', 'color: #00e5ff; font-weight: bold;');
    console.log('%c[NEXUS] UNIFED – PROBATUM v13.5.0-PURE · DORA COMPLIANT · COURT READY carregado.', 'color: #00e5ff; font-family: monospace;');

    setupHashCopy();
    typeWriterEffect();

    // [FIX P3] Sincronização de estado PT/EN no carregamento inicial
    updateLangToggleState();

    // [FIX P3] Setup glitch dentro de DOMContentLoaded — elimina race condition
    const glitchElements = document.querySelectorAll('.glitch-hover');
    glitchElements.forEach(el => { el.setAttribute('data-text', el.textContent); });

    // [i18n-I1] Toast de inicialização via uiStrings
    setTimeout(() => {
        showToast(uiStrings[currentLanguage].systemActive, 'info');
    }, 2000);
});

// ============================================================================
// 12. FECHAR MODAL CLICANDO FORA
// ============================================================================
window.onclick = function(event) {
    const modal = document.getElementById('protocolModal');
    if (event.target === modal) { closeProtocol(); }

    const reportOverlay = document.getElementById('reportOverlay');
    if (event.target === reportOverlay) { closeForensicReport(); }
};

// ============================================================================
// 13. EXPOR FUNÇÕES GLOBALMENTE
// ============================================================================

// Exposição PRIMÁRIA — window.switchLanguage declarado antes de qualquer outro export
// para garantir disponibilidade imediata ao parser inline do HTML (onclick="switchLanguage()")
window.switchLanguage = switchLanguage;

window.openProtocol        = openProtocol;
window.closeProtocol       = closeProtocol;
window.openForensicReport  = openForensicReport;
window.closeForensicReport = closeForensicReport;

// Exposição REDUNDANTE final — garante persistência após qualquer re-avaliação do scope
window.switchLanguage = switchLanguage;

} catch (err) {
    // ── Captura de erros de execução — visível na consola do browser em produção
    console.error('[NEXUS] Erro de inicialização UNIFED – PROBATUM v13.5.0-PURE:', err);
    // Garante que switchLanguage permanece acessível mesmo em caso de erro parcial
    if (typeof switchLanguage === 'function') { window.switchLanguage = switchLanguage; }
}
