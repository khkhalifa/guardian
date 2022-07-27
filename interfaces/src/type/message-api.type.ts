/**
 * Message api
 */
export enum MessageAPI {
    GET_DID_DOCUMENTS = 'get-did-documents',
    GET_VC_DOCUMENTS = 'get-vc-documents',
    SET_DID_DOCUMENT = 'set-did-document',
    SET_VC_DOCUMENT = 'set-vc-document',
    GET_SCHEMAS = 'get-schemas',
    GET_TOKENS = 'get-tokens',
    SET_TOKEN = 'set-token',
    IMPORT_TOKENS = 'import-tokens',
    LOAD_DID_DOCUMENT = 'load-did-document',
    LOAD_SCHEMA_DOCUMENT = 'load-schema-document',
    LOAD_SCHEMA_CONTEXT = 'load-schema-context',
    SET_APPROVE_DOCUMENTS = 'set-approve-documents',
    GET_APPROVE_DOCUMENTS = 'get-approve-documents',
    UPDATE_APPROVE_DOCUMENTS = 'update-approve-documents',
    GET_VP_DOCUMENTS = 'get-vp-documents',
    GET_CHAIN = 'get-chain',
    SET_VP_DOCUMENT = 'set-vp-document',
    IMPORT_SCHEMA = 'import-schema',
    EXPORT_SCHEMAS = 'export-schema',
    PUBLISH_SCHEMA = 'publish-schema',
    PUBLISH_SCHEMA_ASYNC = 'publish-schema-async',
    UNPUBLISHED_SCHEMA = 'unpublished-schema',
    DELETE_SCHEMA = 'delete-schema',
    PREVIEW_SCHEMA = 'preview-schema',
    PREVIEW_SCHEMA_ASYNC = 'preview-schema-async',
    IPFS_ADD_FILE = 'ipfs-add-file',
    IPFS_ADD_FILE_ASYNC = 'ipfs-add-file-async',
    IPFS_GET_FILE = 'ipfs-get-file',
    IPFS_GET_FILE_ASYNC = 'ipfs-get-file-async',
    GET_SCHEMA = 'get-schema',
    GENERATE_DEMO_KEY = 'GENERATE_DEMO_KEY',
    IMPORT_SCHEMAS_BY_MESSAGES = 'IMPORT_SCHEMAS_BY_MESSAGES',
    IMPORT_SCHEMAS_BY_MESSAGES_ASYNC = 'IMPORT_SCHEMAS_BY_MESSAGES_ASYNC',
    IMPORT_SCHEMAS_BY_FILE = 'IMPORT_SCHEMAS_BY_FILE',
    IMPORT_SCHEMAS_BY_FILE_ASYNC = 'IMPORT_SCHEMAS_BY_FILE_ASYNC',
    INCREMENT_SCHEMA_VERSION = 'INCREMENT_SCHEMA_VERSION',
    UPDATE_SETTINGS = 'UPDATE_SETTINGS',
    GET_SETTINGS = 'GET_SETTINGS',
    WRITE_LOG = 'WRITE_LOG',
    GET_LOGS = 'GET_LOGS',
    FREEZE_TOKEN = 'FREEZE_TOKEN',
    KYC_TOKEN = 'KYC_TOKEN',
    ASSOCIATE_TOKEN = 'ASSOCIATE_TOKEN',
    GET_ASSOCIATED_TOKENS = 'GET_ASSOCIATED_TOKENS',
    GET_INFO_TOKEN = 'GET_INFO_TOKEN',
    CREATE_STANDARD_REGISTRY = 'CREATE_STANDARD_REGISTRY',
    CREATE_USER_PROFILE = 'CREATE_USER_PROFILE',
    GET_USER_BALANCE = 'GET_USER_BALANCE',
    GET_TOPIC = 'GET_TOPIC',
    GET_ATTRIBUTES = 'GET_ATTRIBUTES',
    GET_STATUS = 'GET_STATUS',
    UPDATE_STATUS = 'UPDATE_STATUS',
    CREATE_SCHEMA = 'CREATE_SCHEMA',
    CREATE_SCHEMA_ASYNC = 'CREATE_SCHEMA_ASYNC',
    UPDATE_SCHEMA = 'UPDATE_SCHEMA',
    GET_USER_ROLES = 'GET_USER_ROLES',
    CREATE_SYSTEM_SCHEMA = 'CREATE_SYSTEM_SCHEMA',
    GET_SYSTEM_SCHEMAS = 'GET_SYSTEM_SCHEMAS',
    ACTIVE_SCHEMA = 'ACTIVE_SCHEMA',
    GET_SYSTEM_SCHEMA = 'GET_SYSTEM_SCHEMA',
    GET_BALANCE = 'GET_BALANCE',
    GET_ENVIRONMENT='GET_ENVIRONMENT',
    UPDATE_TASK_STATUS = 'UPDATE_TASK_STATUS'
}

/**
 * External message api events
 */
export enum ExternalMessageEvents {
    IPFS_ADDED_FILE = 'external-events.ipfs_added_file',
    TOKEN_MINTED = 'external-events.token_minted',
    ERROR_LOG = 'external-events.error_logs',
    BLOCK_RUN_EVENTS = 'external-events.block_run_action_event',
    IPFS_BEFORE_UPLOAD_CONTENT = 'external-events.ipfs_before_upload_content',
    IPFS_AFTER_READ_CONTENT = 'external-events.ipfs_after_read_content',
    IPFS_LOADED_FILE = 'external-events.ipfs_loaded_file',
}
