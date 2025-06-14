export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      agendamentos: {
        Row: {
          created_at: string
          description: string | null
          end_time: string | null
          event_type: string | null
          id: string
          is_recurring: boolean | null
          location_url: string | null
          notifications_enabled: boolean | null
          recurrence_rule: string | null
          related_content_id: string | null
          start_time: string
          status: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          end_time?: string | null
          event_type?: string | null
          id?: string
          is_recurring?: boolean | null
          location_url?: string | null
          notifications_enabled?: boolean | null
          recurrence_rule?: string | null
          related_content_id?: string | null
          start_time: string
          status?: string | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          end_time?: string | null
          event_type?: string | null
          id?: string
          is_recurring?: boolean | null
          location_url?: string | null
          notifications_enabled?: boolean | null
          recurrence_rule?: string | null
          related_content_id?: string | null
          start_time?: string
          status?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "agendamentos_related_content_id_fkey"
            columns: ["related_content_id"]
            isOneToOne: false
            referencedRelation: "conteudos"
            referencedColumns: ["id"]
          },
        ]
      }
      chatbot_conversas: {
        Row: {
          contexto_adicional: Json | null
          entrada_usuario: string
          id: string
          resposta_bot: string
          timestamp: string
          user_id: string
        }
        Insert: {
          contexto_adicional?: Json | null
          entrada_usuario: string
          id?: string
          resposta_bot: string
          timestamp?: string
          user_id: string
        }
        Update: {
          contexto_adicional?: Json | null
          entrada_usuario?: string
          id?: string
          resposta_bot?: string
          timestamp?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chatbot_conversas_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
        ]
      }
      chats_forum: {
        Row: {
          conteudo: string
          created_at: string
          data_encontro: string | null
          deleted_at: string | null
          encontro_data_hora: string | null
          encontro_local: string | null
          id: string
          is_deleted: boolean | null
          local_encontro: string | null
          parent_message_id: string | null
          post_type: string | null
          tags: string[] | null
          titulo: string | null
          upvotes: number | null
          user_id: string
        }
        Insert: {
          conteudo: string
          created_at?: string
          data_encontro?: string | null
          deleted_at?: string | null
          encontro_data_hora?: string | null
          encontro_local?: string | null
          id?: string
          is_deleted?: boolean | null
          local_encontro?: string | null
          parent_message_id?: string | null
          post_type?: string | null
          tags?: string[] | null
          titulo?: string | null
          upvotes?: number | null
          user_id: string
        }
        Update: {
          conteudo?: string
          created_at?: string
          data_encontro?: string | null
          deleted_at?: string | null
          encontro_data_hora?: string | null
          encontro_local?: string | null
          id?: string
          is_deleted?: boolean | null
          local_encontro?: string | null
          parent_message_id?: string | null
          post_type?: string | null
          tags?: string[] | null
          titulo?: string | null
          upvotes?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chats_forum_parent_message_id_fkey"
            columns: ["parent_message_id"]
            isOneToOne: false
            referencedRelation: "chats_forum"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chats_forum_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
        ]
      }
      chats_forum_participantes: {
        Row: {
          chat_id: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          chat_id: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          chat_id?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chats_forum_participantes_chat_id_fkey"
            columns: ["chat_id"]
            isOneToOne: false
            referencedRelation: "chats_forum"
            referencedColumns: ["id"]
          },
        ]
      }
      conteudos: {
        Row: {
          author_name: string | null
          body: string | null
          content_type: string
          cover_image_url: string | null
          created_at: string
          description: string | null
          id: string
          is_premium: boolean | null
          published_at: string | null
          tags: string[] | null
          title: string
          updated_at: string
          url: string | null
        }
        Insert: {
          author_name?: string | null
          body?: string | null
          content_type: string
          cover_image_url?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_premium?: boolean | null
          published_at?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string
          url?: string | null
        }
        Update: {
          author_name?: string | null
          body?: string | null
          content_type?: string
          cover_image_url?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_premium?: boolean | null
          published_at?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string
          url?: string | null
        }
        Relationships: []
      }
      conteudos_educacionais: {
        Row: {
          autor: string | null
          categoria: string | null
          conteudo_principal: string
          data_publicacao: string
          descricao_curta: string | null
          duracao_estimada_leitura: string | null
          id: string
          tags: string[] | null
          tipo: string
          titulo: string
          url_externa: string | null
        }
        Insert: {
          autor?: string | null
          categoria?: string | null
          conteudo_principal: string
          data_publicacao?: string
          descricao_curta?: string | null
          duracao_estimada_leitura?: string | null
          id?: string
          tags?: string[] | null
          tipo: string
          titulo: string
          url_externa?: string | null
        }
        Update: {
          autor?: string | null
          categoria?: string | null
          conteudo_principal?: string
          data_publicacao?: string
          descricao_curta?: string | null
          duracao_estimada_leitura?: string | null
          id?: string
          tags?: string[] | null
          tipo?: string
          titulo?: string
          url_externa?: string | null
        }
        Relationships: []
      }
      diario_anexos: {
        Row: {
          anexo_url: string
          created_at: string
          diario_id: string
          id: string
          tipo_anexo: string
          user_id: string
        }
        Insert: {
          anexo_url: string
          created_at?: string
          diario_id: string
          id?: string
          tipo_anexo: string
          user_id: string
        }
        Update: {
          anexo_url?: string
          created_at?: string
          diario_id?: string
          id?: string
          tipo_anexo?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "diario_anexos_diario_id_fkey"
            columns: ["diario_id"]
            isOneToOne: false
            referencedRelation: "diarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "diario_anexos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
        ]
      }
      diarios: {
        Row: {
          data_registro: string
          id: string
          sentimento_analisado: string | null
          texto: string | null
          transcricao: string | null
          user_id: string
        }
        Insert: {
          data_registro?: string
          id?: string
          sentimento_analisado?: string | null
          texto?: string | null
          transcricao?: string | null
          user_id: string
        }
        Update: {
          data_registro?: string
          id?: string
          sentimento_analisado?: string | null
          texto?: string | null
          transcricao?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "diarios_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
        ]
      }
      encontro_participantes: {
        Row: {
          created_at: string
          encontro_id: string
          id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          encontro_id: string
          id?: number
          user_id: string
        }
        Update: {
          created_at?: string
          encontro_id?: string
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_encontro"
            columns: ["encontro_id"]
            isOneToOne: false
            referencedRelation: "chats_forum"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
        ]
      }
      forum_mensagens: {
        Row: {
          conteudo: string
          data_criacao: string
          data_edicao: string | null
          editada: boolean | null
          id: string
          mensagem_pai_id: string | null
          topico_id: string
          user_id: string
        }
        Insert: {
          conteudo: string
          data_criacao?: string
          data_edicao?: string | null
          editada?: boolean | null
          id?: string
          mensagem_pai_id?: string | null
          topico_id: string
          user_id: string
        }
        Update: {
          conteudo?: string
          data_criacao?: string
          data_edicao?: string | null
          editada?: boolean | null
          id?: string
          mensagem_pai_id?: string | null
          topico_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "forum_mensagens_mensagem_pai_id_fkey"
            columns: ["mensagem_pai_id"]
            isOneToOne: false
            referencedRelation: "forum_mensagens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "forum_mensagens_topico_id_fkey"
            columns: ["topico_id"]
            isOneToOne: false
            referencedRelation: "forum_topicos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "forum_mensagens_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
        ]
      }
      forum_topicos: {
        Row: {
          aberto: boolean | null
          data_criacao: string
          descricao: string | null
          fixado: boolean | null
          id: string
          tags: string[] | null
          titulo: string
          ultima_atividade: string
          user_id: string
        }
        Insert: {
          aberto?: boolean | null
          data_criacao?: string
          descricao?: string | null
          fixado?: boolean | null
          id?: string
          tags?: string[] | null
          titulo: string
          ultima_atividade?: string
          user_id: string
        }
        Update: {
          aberto?: boolean | null
          data_criacao?: string
          descricao?: string | null
          fixado?: boolean | null
          id?: string
          tags?: string[] | null
          titulo?: string
          ultima_atividade?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "forum_topicos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
        ]
      }
      metas: {
        Row: {
          data_conclusao: string | null
          data_fim: string | null
          data_fim_prevista: string | null
          data_inicio: string
          descricao: string | null
          gemini_content: string | null
          id: string
          objetivo_numerico: number | null
          progresso: number | null
          status: string
          tipo_vicio: string
          titulo: string
          unidade: string | null
          user_id: string
        }
        Insert: {
          data_conclusao?: string | null
          data_fim?: string | null
          data_fim_prevista?: string | null
          data_inicio?: string
          descricao?: string | null
          gemini_content?: string | null
          id?: string
          objetivo_numerico?: number | null
          progresso?: number | null
          status?: string
          tipo_vicio: string
          titulo: string
          unidade?: string | null
          user_id: string
        }
        Update: {
          data_conclusao?: string | null
          data_fim?: string | null
          data_fim_prevista?: string | null
          data_inicio?: string
          descricao?: string | null
          gemini_content?: string | null
          id?: string
          objetivo_numerico?: number | null
          progresso?: number | null
          status?: string
          tipo_vicio?: string
          titulo?: string
          unidade?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "metas_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
        ]
      }
      pontos: {
        Row: {
          data: string
          diario_id: string | null
          id: string
          meta_id: string | null
          motivo: string
          quantidade: number
          user_id: string
        }
        Insert: {
          data?: string
          diario_id?: string | null
          id?: string
          meta_id?: string | null
          motivo: string
          quantidade: number
          user_id: string
        }
        Update: {
          data?: string
          diario_id?: string | null
          id?: string
          meta_id?: string | null
          motivo?: string
          quantidade?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pontos_diario_id_fkey"
            columns: ["diario_id"]
            isOneToOne: false
            referencedRelation: "diarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pontos_meta_id_fkey"
            columns: ["meta_id"]
            isOneToOne: false
            referencedRelation: "metas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pontos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
        ]
      }
      users: {
        Row: {
          auth_user_id: string | null
          avatar_url: string | null
          data_cadastro: string
          email: string
          id: string
          nivel_dependencia: string | null
          nome: string
          onboarding_completed: boolean
          onboarding_concluido: boolean
          tipo_vicio: string | null
        }
        Insert: {
          auth_user_id?: string | null
          avatar_url?: string | null
          data_cadastro?: string
          email: string
          id?: string
          nivel_dependencia?: string | null
          nome: string
          onboarding_completed?: boolean
          onboarding_concluido?: boolean
          tipo_vicio?: string | null
        }
        Update: {
          auth_user_id?: string | null
          avatar_url?: string | null
          data_cadastro?: string
          email?: string
          id?: string
          nivel_dependencia?: string | null
          nome?: string
          onboarding_completed?: boolean
          onboarding_concluido?: boolean
          tipo_vicio?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      finalizar_onboarding_usuario: {
        Args: {
          p_tipo_vicio: string
          p_nivel_dependencia: string
          p_gemini_content: string
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
