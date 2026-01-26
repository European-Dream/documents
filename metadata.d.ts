type FunctionalScope = 'Communication' | 'Finance' | 'Legal'
// Member state of the European Union
type GeographicalScope = 'Austria' | 'Belgium' | 'Bulgaria' | 'Croatia' | 'Cyprus' | 'Czech Republic' | 'Denmark' | 'Estonia' | 'Finland' | 'France' | 'Germany' | 'Greece' | 'Hungary' | 'Ireland' | 'Italy' | 'Latvia' | 'Lithuania' | 'Luxembourg' | 'Malta' | 'Netherlands' | 'Poland' | 'Portugal' | 'Romania' | 'Slovakia' | 'Slovenia' | 'Spain' | 'Sweden'

/**
 * Markdown Document Metadata.
 */
interface Metadata {
  Project: {
    Phase: 'Bootstrap'
    Scope: 'Global' | FunctionalScope | GeographicalScope
  }
  Document: {
    State: 'Draft' | 'Proposal' | 'Done'
    /**
     * Version number: `X.Y`.
     *
     * - `X` starts at 1 and increments when the document is amended in substance (i.e. content or meaning).
     * - `Y` starts at 0 and increments when the document is amended in form (i.e. style or presentation).
     *
     * The version is bumped whenever:
     * - The document is created for the first time (initial state: `Draft`, version `1.0`).
     * - The document transitions from `Done` back to `Draft` to prepare the next version.
     */
    Version: string
    LanguageCode: string
  }
}
